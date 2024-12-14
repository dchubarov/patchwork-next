import { createContext, ReactNode, useContext } from "react";

export type SidebarPlacement = "left" | "right";

export interface LayoutState {
  sidebarPlacement: SidebarPlacement;
  drawerOpen?: boolean;
  drawerTitle?: string;
  drawerChild?: ReactNode;
  configureSidebar(placement: SidebarPlacement): void;
  openDrawer(element: ReactNode, title?: string): void;
  closeDrawer(): void;
}

export const LayoutContext = createContext<LayoutState | null>(null);

export function useInteractiveLayout(): LayoutState {
  const ctx = useContext(LayoutContext);
  if (!ctx) {
    throw new Error("useLayout() should be called inside LayoutProvider");
  }
  return ctx;
}
