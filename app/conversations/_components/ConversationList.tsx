'use client';

import useConversation from '@/app/hooks/useConversation';
import { pusherClient } from '@/app/libs/pusher';
import { cn } from '@/app/libs/utils';
import { FullConversationType } from '@/app/types';
import { User } from '@prisma/client';
import { find } from 'lodash';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { MdOutlineGroupAdd } from 'react-icons/md';
import ConversationBox from './ConversationBox';
import GroupChatModal from './GroupChatModal';

interface ConversationListProps {
  initialItems: FullConversationType[];
  users: User[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
  users,
}) => {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const session = useSession();

  const { conversationId, isOpen } = useConversation();

  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  useEffect(() => {
    if (!pusherKey) {
      return;
    }

    pusherClient.subscribe(pusherKey);

    const updateHandler = (conversation: FullConversationType) => {
      setItems((current) =>
        current.map((currentConversation) => {
          if (currentConversation.id === conversation.id) {
            return {
              ...currentConversation,
              messages: conversation.messages,
            };
          }

          return currentConversation;
        })
      );
    };

    const newHandler = (conversation: FullConversationType) => {
      setItems((current) => {
        if (find(current, { id: conversation.id })) {
          return current;
        }

        return [conversation, ...current];
      });
    };

    const removeHandler = (conversation: FullConversationType) => {
      setItems((current) => {
        return [...current.filter((convo) => convo.id !== conversation.id)];
      });

      if (conversationId === conversation.id) {
        router.push('/conversations');
      }
    };

    pusherClient.bind('conversation:update', updateHandler);
    pusherClient.bind('conversation:new', newHandler);
    pusherClient.bind('conversation:remove', removeHandler);

    return () => {
      pusherClient.unsubscribe(pusherKey);
      pusherClient.unbind('conversation:update', updateHandler);
      pusherClient.unbind('conversation:new', newHandler);
      pusherClient.unbind('conversation:remove', removeHandler);
    };
  }, [pusherKey, router, conversationId]);

  return (
    <>
      <GroupChatModal
        isOpen={isModalOpen}
        users={users}
        onClose={() => setIsModalOpen(false)}
      />

      <aside
        className={cn(
          'fixed inset-y-0 overflow-y-auto border-r border-gray-200 pb-20 lg:left-20 lg:block lg:w-80 lg:pb-0',
          isOpen ? 'hidden' : 'left-0 block w-full'
        )}
      >
        <div className='px-5'>
          <div className='mb-4 flex items-center justify-between pt-4'>
            <div className='text-2xl font-bold text-neutral-800'>Messages</div>
            <div
              onClick={() => setIsModalOpen(true)}
              className='cursor-pointer rounded-full bg-gray-100 p-2 text-gray-600 transition hover:opacity-75'
            >
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId === item.id}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
