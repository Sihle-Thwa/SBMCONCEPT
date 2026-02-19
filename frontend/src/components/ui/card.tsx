import * as React from "react";

import { cn } from "@/lib/utils";

// Matches .card in index.css — gradient surface, border, glow shadow
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border)]",
        "bg-[image:var(--gradient-card)]",
        "text-[var(--color-fg)]",
        "shadow-[var(--shadow-card)]",
        // hover lift — mirrors .card-hover
        "transition-[transform,box-shadow,border-color] duration-[var(--duration-base)]",
        "hover:-translate-y-[3px] hover:shadow-[var(--shadow-glow),var(--shadow-card)] hover:border-[var(--color-border-primary)]",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5 p-[var(--space-6)]", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "font-[var(--font-display)] text-2xl font-semibold leading-tight tracking-tight",
        "text-[var(--color-fg)]",
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-sm leading-relaxed text-[var(--color-fg-muted)]",
        className,
      )}
      {...props}
    />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-[var(--space-6)] pt-0", className)}
      {...props}
    />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-[var(--space-3)] p-[var(--space-6)] pt-0",
        className,
      )}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

// Extra: a glass-surface variant for when you want the backdrop-blur treatment
const CardGlass = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border)]",
        "backdrop-blur-xl bg-[color-mix(in_oklch,var(--color-bg-raised),transparent_20%)]",
        "text-[var(--color-fg)] shadow-[var(--shadow-card)]",
        "transition-[background-color,border-color] duration-[var(--duration-base)]",
        "hover:bg-[color-mix(in_oklch,var(--color-bg-raised),transparent_10%)] hover:border-[var(--color-border-primary)]",
        className,
      )}
      {...props}
    />
  ),
);
CardGlass.displayName = "CardGlass";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardGlass };