import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Mirrors .badge and .badge-* in index.css
const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "rounded-[var(--radius-full)]",
    "border border-[var(--color-border)]",
    "px-[0.75em] py-[0.25em]",
    "text-xs font-medium",
    "font-[var(--font-body)]",
    "letter-spacing-[var(--tracking-wider)] uppercase",
    "transition-colors duration-[var(--duration-fast)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]",
  ],
  {
    variants: {
      variant: {
        // .badge-primary — teal
        default: [
          "bg-[var(--color-primary-muted)]",
          "border-[var(--color-border-primary)]",
          "text-[var(--color-primary)]",
          "hover:bg-[oklch(0.72_0.13_185_/_0.22)]",
        ],
        // neutral surface badge
        secondary: [
          "bg-[var(--color-bg-raised)]",
          "border-[var(--color-border)]",
          "text-[var(--color-fg-muted)]",
          "hover:bg-[var(--color-bg-elevated)]",
        ],
        // .badge-danger
        destructive: [
          "bg-[var(--color-danger-muted)]",
          "border-[color-mix(in_oklch,var(--color-danger),transparent_60%)]",
          "text-[var(--color-danger)]",
          "hover:bg-[oklch(0.63_0.22_25_/_0.22)]",
        ],
        // bare outline — just a border, no fill
        outline: [
          "bg-transparent",
          "border-[var(--color-border)]",
          "text-[var(--color-fg)]",
          "hover:border-[var(--color-border-strong)]",
        ],
        // .badge-accent — gold
        accent: [
          "bg-[var(--color-accent-muted)]",
          "border-[var(--color-border-accent)]",
          "text-[var(--color-accent)]",
          "hover:bg-[oklch(0.78_0.17_80_/_0.22)]",
        ],
        // .badge-success — green
        success: [
          "bg-[var(--color-success-muted)]",
          "border-[color-mix(in_oklch,var(--color-success),transparent_60%)]",
          "text-[var(--color-success)]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };