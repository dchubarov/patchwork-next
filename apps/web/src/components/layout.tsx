"use client";

import React from "react";
import { useInteractiveLayout } from "@/lib/layout";
import DrawerComponent from "@/components/drawer";
import SidebarComponent from "@/components/sidebar";
import { SidebarPlacement } from "@/lib/layout";

export function Root({ children }: React.PropsWithChildren) {
  return (
    <div className="relative isolate flex min-h-svh w-full">{children}</div>
  );
}

export function Sidebar({ placement }: { placement: SidebarPlacement }) {
  const { sidebarPlacement } = useInteractiveLayout();
  return sidebarPlacement === placement ? (
    <aside className="w-[var(--Sidebar-width)] h-screen">
      <SidebarComponent placement={placement} />
    </aside>
  ) : null;
}

export function View({ children }: React.PropsWithChildren) {
  return <main className="grow h-screen overflow-auto">{children}</main>;
}

export function Drawer() {
  const {
    sidebarPlacement,
    drawerOpen,
    drawerChild,
    drawerTitle,
    closeDrawer,
  } = useInteractiveLayout();
  return (
    <DrawerComponent
      open={drawerOpen ?? false}
      onClose={closeDrawer}
      child={drawerChild}
      title={drawerTitle}
      placement={sidebarPlacement === "left" ? "right" : "left"}
    />
  );
}
