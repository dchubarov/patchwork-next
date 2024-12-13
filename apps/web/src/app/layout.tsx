import type React from "react";
import type { Metadata } from "next";
import * as Layout from "@/components/layout";
import "@/styles/globals.css";
import LayoutProvider from "@/providers/LayoutProvider";

export const metadata: Metadata = {
  title: { template: "%s - Patchwork", default: "Patchwork" },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white dark:bg-gray-900 antialiased">
      <body className="h-full bg-white dark:bg-gray-900">
        <LayoutProvider>
          <Layout.Root>
            <Layout.Sidebar placement="left" />
            <Layout.View>{children}</Layout.View>
            <Layout.Sidebar placement="right" />
          </Layout.Root>
          <Layout.Drawer />
        </LayoutProvider>
      </body>
    </html>
  );
}
