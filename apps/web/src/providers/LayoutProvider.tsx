"use client";

import { PropsWithChildren, useState } from "react";
import { LayoutState, SidebarPlacement, LayoutContext } from "@/lib/layout";

export default function LayoutProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useState(
    () =>
      ({
        sidebarPlacement: "left" as SidebarPlacement,

        configureSidebar(placement) {
          dispatch((prev) => ({ ...prev, sidebarPlacement: placement }));
        },

        openDrawer(element, title) {
          dispatch((prev) => ({
            ...prev,
            drawerOpen: true,
            drawerChild: element,
            drawerTitle: title,
          }));
        },

        closeDrawer() {
          dispatch((prev) => ({
            ...prev,
            drawerOpen: false,
            drawerChild: null,
            drawerTitle: undefined,
          }));
        },
      }) satisfies LayoutState,
  );

  return (
    <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>
  );
}
