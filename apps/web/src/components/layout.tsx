import React from "react";

export function Root({ children }: React.PropsWithChildren) {
  return (
    <div className="relative isolate flex min-h-svh w-full">{children}</div>
  );
}

export function Sidebar({ children }: React.PropsWithChildren) {
  return (
    <aside className="w-[var(--Sidebar-width)] h-screen">{children}</aside>
  );
}

export function View({ children }: React.PropsWithChildren) {
  return <main className="grow h-screen overflow-auto">{children}</main>;
}
