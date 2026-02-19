import * as React from "react";

import { cn } from "@/lib/utils";

// Matches .input in index.css
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Layout
          "flex w-full",
          // Shape
          "rounded-[var(--radius-md)]",
          // Surface — sunken well
          "border border-[var(--color-border)] bg-[var(--color-bg-sunken)]",
          // Typography
          "px-[var(--space-4)] py-[var(--space-3)] text-sm text-[var(--color-fg)]",
          "font-[var(--font-body)] leading-normal",
          // Placeholder
          "placeholder:text-[var(--color-fg-subtle)]",
          // Focus — teal ring
          "focus-visible:outline-none",
          "focus-visible:border-[var(--color-primary)]",
          "focus-visible:shadow-[0_0_0_3px_var(--color-primary-muted)]",
          "transition-[border-color,box-shadow] duration-[var(--duration-fast)]",
          // File input reset
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-fg)]",
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
Input.displayName = "Input";

export { Input };