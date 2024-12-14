"use client";

import { useInteractiveLayout } from "@/lib/layout";
import { Button } from "@/components/primitive/button";

export function ToggleColorSchemeButton() {
  return (
    <Button outline disabled onClick={() => {}}>
      Light/Dark
    </Button>
  );
}

export function OpenDrawerButton() {
  const { openDrawer } = useInteractiveLayout();
  return (
    <Button outline onClick={() => openDrawer("Drawer contents", "My drawer")}>
      Open drawer
    </Button>
  );
}

export function SwapSidebarButton() {
  const { sidebarPlacement, configureSidebar } = useInteractiveLayout();
  return (
    <Button
      outline
      onClick={() =>
        configureSidebar(sidebarPlacement === "right" ? "left" : "right")
      }>
      Swap sidebar
    </Button>
  );
}
