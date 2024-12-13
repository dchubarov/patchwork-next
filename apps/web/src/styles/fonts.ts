import { Inter } from "next/font/google";
import clsx from "clsx";

const sansFont = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export function fontCssClasses() {
  return clsx(sansFont.className, "antialiased font-normal");
}
