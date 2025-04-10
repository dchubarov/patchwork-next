'use client';

import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>Patchwork</SidebarHeader>
      <SidebarContent>Content</SidebarContent>
      <SidebarFooter>User</SidebarFooter>
      {/*<SidebarRail />*/}
    </Sidebar>
  );
}
