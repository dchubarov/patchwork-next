import Image from "next/image";

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
    <div className="px-4 pt-4 top-0 sticky z-20 backdrop-blur-xs">
      <div className="flex flex-nowrap items-center gap-2">
        <Logo />
        <p className="grow text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
          Annoyingly very long title
        </p>
      </div>
      <div className="mt-3">Pinned widget</div>
      <Divider />
    </div>
  );
}

function Footer() {
  return (
    <div className="px-4 pb-3 bottom-0 sticky z-20 backdrop-blur-xs">
      <Divider />
      <p>User name</p>
      <p>User email</p>
    </div>
  );
}

function WidgetHost() {
  return (
    <div className="grow">
      {[...Array(100)].map((_, index) => (
        <div key={index}>Sidebar widget #{index + 1}</div>
      ))}
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="h-full py-2 pl-2">
      <div className="flex flex-col h-full z-10 overflow-x-clip overflow-y-auto scrollbar-thin rounded-lg bg-slate-50 border-slate-500 border-1 shadow-sm">
        <Header />
        <WidgetHost />
        <Footer />
      </div>
    </div>
  );
}
