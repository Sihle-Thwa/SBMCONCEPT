import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// Mirrors Input styling — same sunken well, same focus ring
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Layout
          "flex min-h-20 w-full",
          // Shape
          "rounded-[var(--radius-md)]",
          // Surface
          "border border-[var(--color-border)] bg-[var(--color-bg-sunken)]",
          // Typography
          "px-[var(--space-4)] py-[var(--space-3)] text-sm text-[var(--color-fg)]",
          "font-[var(--font-body)] leading-relaxed",
          // Placeholder
          "placeholder:text-[var(--color-fg-subtle)]",
          // Focus
          "focus-visible:outline-none",
          "focus-visible:border-[var(--color-primary)]",
          "focus-visible:shadow-[0_0_0_3px_var(--color-primary-muted)]",
          "transition-[border-color,box-shadow] duration-[var(--duration-fast)]",
          // Resize
          "resize-y",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };