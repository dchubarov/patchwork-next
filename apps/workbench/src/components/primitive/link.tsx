import React, { forwardRef } from "react";
import { DataInteractive } from "@headlessui/react";
import NextLink, { type LinkProps } from "next/link";

export const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <DataInteractive>
      <NextLink {...props} ref={ref} />
    </DataInteractive>
  );
});
