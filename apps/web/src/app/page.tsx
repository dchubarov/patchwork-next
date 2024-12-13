import {
  OpenDrawerButton,
  SwapSidebarButton,
  ToggleColorSchemeButton,
} from "./page-interactive-elements";

export default function LandingPage() {
  return (
    <>
      <div>
        <div className="flex gap-1 top-0 sticky bg-white dark:bg-black">
          <ToggleColorSchemeButton />
          <OpenDrawerButton />
          <SwapSidebarButton />
        </div>
        {[...Array(140)].map((_, index) => (
          <p key={index}>Pretty blank canvas</p>
        ))}
      </div>
    </>
  );
}
