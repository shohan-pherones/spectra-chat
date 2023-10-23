'use client';

import useRoutes from '@/app/hooks/useRoutes';
import { User } from '@prisma/client';
import { useState } from 'react';
import Avatar from '../Avatar';
import DesktopItem from './DesktopItem';
import SettingsModal from './SettingsModal';

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className='hidden justify-between lg:fixed lg:inset-0 lg:left-0 lg:z-40 lg:flex lg:w-20 lg:flex-col lg:overflow-y-auto lg:border-r-[1px] lg:bg-white lg:pb-4 xl:px-6'>
        <nav className='mt-4 flex flex-col justify-between'>
          <ul role='list' className='flex flex-col items-center space-y-1'>
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>

        <nav className='mt-4 flex flex-col items-center justify-between'>
          <div
            onClick={() => setIsOpen(true)}
            className='cursor-pointer transition hover:opacity-75'
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
