import React from 'react';
import DesktopSidebar from './DesktopSidebar';

type Props = {
  children: React.ReactNode;
};

const Sidebar: React.FC<Props> = async ({ children }) => {
  return (
    <div className='h-full'>
      <DesktopSidebar/>
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
