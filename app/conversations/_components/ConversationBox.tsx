'use client';

import { FullConversationType } from '@/app/types';

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
