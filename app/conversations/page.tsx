'use client';

import EmptyState from '../components/EmptyState';
import useConversation from '../hooks/useConversation';
import { cn } from '../libs/utils';

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={cn('h-full lg:block lg:pl-80', isOpen ? 'block' : 'hidden')}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
