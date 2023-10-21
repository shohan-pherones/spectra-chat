'use client';

import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

const Users = () => {
  return (
    <div className='hidden h-full lg:block lg:pl-80'>
      <EmptyState />
    </div>
  );
};

export default Users;
