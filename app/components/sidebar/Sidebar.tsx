import { PropsWithChildren } from 'react';
import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';
import getCurrentUser from '@/app/actions/getCurrentUser';

const Sidebar = async ({ children }: PropsWithChildren) => {
  const currentUser = await getCurrentUser();

  return (
    <div className='h-full'>
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className='h-full lg:pl-20'>{children}</main>
    </div>
  );
};

export default Sidebar;
