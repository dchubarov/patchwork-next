import {
  OpenDrawerButton,
  SwapSidebarButton,
  ToggleColorSchemeButton,
} from "./page-interactive-elements";
import Panel from "@/components/primitive/panel";

export default function LandingPage() {
  return (
    <>
      <div className="text-slate-700">
        <Panel
          intent="primary"
          outline
          // solid
          className="flex justify-center p-2 mx-2 mt-2 gap-1 top-2 sticky"
        >
          <ToggleColorSchemeButton />
          <OpenDrawerButton />
          <SwapSidebarButton />
        </Panel>
        {[...Array(140)].map((_, index) => (
          <p key={index}>Pretty blank canvas // Начиная с чистого листа</p>
        ))}
      </div>
    </>
  );
}
