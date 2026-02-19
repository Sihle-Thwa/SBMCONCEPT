import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

// Matches [data-tooltip] treatment in index.css — elevated glass surface
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      // Layout & shape
      "z-[var(--z-tooltip)] overflow-hidden",
      "rounded-[var(--radius-sm)]",
      // Surface — elevated card with light glass treatment
      "border border-[var(--color-border)]",
      "bg-[var(--color-bg-elevated)]",
      "backdrop-blur-xl",
      // Typography
      "px-[var(--space-3)] py-[var(--space-1)]",
      "text-xs font-medium",
      "font-[var(--font-body)]",
      "text-[var(--color-fg)]",
      // Shadow
      "shadow-[var(--shadow-md)]",
      // Animations
      "animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };