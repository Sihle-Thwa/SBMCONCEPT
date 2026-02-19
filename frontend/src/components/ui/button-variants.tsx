import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  // Base — mirrors .btn in index.css
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium tracking-wide text-sm leading-none",
    "rounded-[var(--radius-md)] border border-transparent",
    "transition-all duration-[var(--duration-fast)]",
    "select-none cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.97]",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        // .btn-primary
        default: [
          "bg-[image:var(--gradient-primary)] text-[var(--color-primary-fg)]",
          "shadow-[var(--shadow-button)]",
          "hover:shadow-[var(--shadow-glow-lg)] hover:brightness-110",
        ],
        // .btn-danger
        destructive: [
          "bg-[var(--color-danger-muted)] text-[var(--color-danger)]",
          "border-[color-mix(in_oklch,var(--color-danger),transparent_60%)]",
          "hover:bg-[var(--color-danger)] hover:text-white hover:border-transparent",
        ],
        // .btn-outline
        outline: [
          "bg-transparent text-[var(--color-primary)]",
          "border-[var(--color-border-primary)]",
          "hover:bg-[var(--color-primary-muted)] hover:shadow-[var(--shadow-button)]",
        ],
        // secondary — slightly elevated surface
        secondary: [
          "bg-[var(--color-bg-elevated)] text-[var(--color-fg)]",
          "border-[var(--color-border)]",
          "hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-raised)]",
        ],
        // .btn-ghost
        ghost: [
          "bg-transparent text-[var(--color-fg-muted)]",
          "hover:bg-[var(--color-bg-elevated)] hover:text-[var(--color-fg)]",
        ],
        link: [
          "bg-transparent text-[var(--color-primary)] underline-offset-4",
          "hover:underline hover:text-[var(--color-primary-hover)]",
        ],
        // hero — gradient + glow (matches .btn-primary with extra flair)
        hero: [
          "bg-[image:var(--gradient-primary)] text-[var(--color-primary-fg)] ",
          "font-semibold shadow-[var(--shadow-button)]",
          "hover:shadow-[var(--shadow-glow-lg)] hover:brightness-110 hover:scale-[1.02]",
          
        ],
        // .btn-accent (gold)
        gold: [
          "bg-[image:var(--gradient-gold)] text-[var(--color-accent-fg)]",
          "font-semibold shadow-[var(--shadow-gold)]",
          "hover:brightness-110",
        ],
      },
      size: {
        default: "h-10 px-[var(--space-6)] py-[var(--space-3)]",
        sm: "h-9 px-[var(--space-4)] py-[var(--space-2)] text-xs rounded-[var(--radius-sm)]",
        lg: "h-12 px-[var(--space-8)] py-[var(--space-4)] text-base rounded-[var(--radius-lg)]",
        xl: "h-14 px-[var(--space-10)] text-lg rounded-[var(--radius-lg)]",
        icon: "h-10 w-10 rounded-[var(--radius-md)] p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
