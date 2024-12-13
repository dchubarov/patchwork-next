import Image from "next/image";
import { SidebarPlacement } from "@/lib/layout";
import clsx from "clsx";

function Divider() {
  return <hr />;
}

function Logo() {
  return (
    <Image
      className="aspect-square hover:-rotate-90 transition-transform"
      width={32}
      height={32}
      src="/logo192.png"
      alt="logo"
      aria-hidden
    />
  );
}

function Header() {
  return (
    <div className="px-4 pt-4 top-0 sticky z-20 backdrop-blur-sm">
      <div className="flex flex-nowrap items-center gap-2">
        <Logo />
        <p className="grow text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          Annoyingly very long title
        </p>
      </div>
      <div className="mt-5 pb-2 text-sm">Pinned widget</div>
      <Divider />
    </div>
  );
}

function Footer() {
  return (
    <div className="px-4 pb-3 bottom-0 sticky z-20 backdrop-blur-sm text-sm">
      <Divider />
      <div className="pt-2">
        <p className="font-semibold">User name</p>
        <p className="text-xs italic">user@acme.corp</p>
      </div>
    </div>
  );
}

function WidgetHost() {
  return (
    <div className="grow text-sm mx-4 flex flex-col gap-2">
      {[...Array(100)].map((_, index) => (
        <div key={index}>Sidebar widget #{index + 1}</div>
      ))}
    </div>
  );
}

export default function Sidebar({
  placement,
}: { placement: SidebarPlacement }) {
  return (
    <div
      className={clsx(
        "h-full py-2",
        placement === "left" && "pl-2",
        placement === "right" && "pr-2",
      )}
    >
      <div
        className={clsx(
          "flex flex-col h-full z-10 overflow-x-clip overflow-y-auto scrollbar-thin",
          "bg-slate-300 border-slate-400 text-slate-800",
          "rounded-md border-1 shadow-md shadow-gray-500/20",
        )}
      >
        <Header />
        <WidgetHost />
        <Footer />
      </div>
    </div>
  );
}
