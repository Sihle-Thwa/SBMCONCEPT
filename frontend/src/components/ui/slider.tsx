import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    {/* Track — sunken well */}
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-bg-sunken)] border border-[var(--color-border)]"
    >
      {/* Filled range — gradient primary */}
      <SliderPrimitive.Range
        className="absolute h-full bg-[image:var(--gradient-primary)]"
      />
    </SliderPrimitive.Track>

    {/* Thumb */}
    <SliderPrimitive.Thumb
      className={cn(
        // Shape & size
        "block h-5 w-5 rounded-[var(--radius-full)] shrink-0",
        // Surface — elevated with gradient border trick
        "bg-[var(--color-bg-elevated)]",
        "border-2 border-[var(--color-primary)]",
        "shadow-[var(--shadow-button)]",
        // Focus
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        // Hover glow
        "hover:shadow-[var(--shadow-glow)] hover:border-[var(--color-primary-hover)]",
        // Transition
        "transition-[box-shadow,border-color] duration-[var(--duration-fast)]",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50",
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };