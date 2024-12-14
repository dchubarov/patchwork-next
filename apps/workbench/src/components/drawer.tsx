"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { SidebarPlacement } from "@/lib/layout";
import clsx from "clsx";

interface DrawerProps {
  open?: boolean;
  child?: ReactNode;
  title?: string;
  placement?: SidebarPlacement;
  onClose(isOpen: boolean): void;
}

export default function Drawer({
  open,
  onClose,
  child,
  title,
  placement,
}: DrawerProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500/65 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        transition
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              "pointer-events-none fixed inset-y-0 flex max-w-full",
              placement === "left" ? "left-0 pr-10" : "right-0  pl-10",
            )}
          >
            <DialogPanel
              className={clsx(
                "pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700",
                placement === "left"
                  ? "data-closed:-translate-x-full"
                  : "data-closed:translate-x-full",
              )}
              transition
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-gray-900">
                      {title}
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => onClose(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>X
                      </button>
                    </div>
                  </div>
                </div>
                {child && (
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {child}
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
