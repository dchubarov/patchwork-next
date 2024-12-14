import {
  type ForwardedRef,
  forwardRef,
  type HTMLAttributes,
  type PropsWithoutRef,
} from "react";
import { cva, VariantProps } from "cva";

const panelVariants = cva("rounded-md", {
  variants: {
    intent: {
      neutral: "bg-neutral-50 border-neutral-200",
      primary: "bg-primary-50 border-primary-200",
      none: null,
    },
    solid: {
      false: null,
      true: null,
    },
    outline: {
      false: "border-0",
      true: "border-1",
    },
  },
  compoundVariants: [
    /* Solid + intent */
    {
      solid: true,
      intent: "neutral",
      className: "bg-neutral-300 border-neutral-400",
    },
    {
      solid: true,
      intent: "primary",
      className: "bg-primary-300 border-primary-400",
    },
    /* Outline + intent:none */
    {
      outline: true,
      intent: "none",
      className: "border-current",
    },
  ],
  defaultVariants: { intent: "neutral", outline: false, solid: false },
});

type PanelProps = VariantProps<typeof panelVariants> &
  PropsWithoutRef<HTMLAttributes<HTMLDivElement>>;

const Panel = forwardRef(function Panel(
  { className, intent, solid, outline, ...other }: PanelProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      {...other}
      className={panelVariants({ className, intent, solid, outline })}
      ref={ref}
    />
  );
});

export default Panel;
