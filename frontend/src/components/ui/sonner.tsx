import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

// Toast classes align with .alert and .glass from index.css
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: [
            "group toast",
            // Glass surface — elevated card treatment
            "group-[.toaster]:bg-[var(--color-bg-elevated)]",
            "group-[.toaster]:text-[var(--color-fg)]",
            "group-[.toaster]:border group-[.toaster]:border-[var(--color-border)]",
            "group-[.toaster]:shadow-[var(--shadow-lg)]",
            "group-[.toaster]:backdrop-blur-xl",
            "group-[.toaster]:rounded-[var(--radius-md)]",
            "group-[.toaster]:font-[var(--font-body)]",
          ].join(" "),
          description: [
            "group-[.toast]:text-[var(--color-fg-muted)]",
            "group-[.toast]:text-sm",
          ].join(" "),
          actionButton: [
            "group-[.toast]:bg-[image:var(--gradient-primary)]",
            "group-[.toast]:text-[var(--color-primary-fg)]",
            "group-[.toast]:rounded-[var(--radius-sm)]",
            "group-[.toast]:font-medium group-[.toast]:text-xs",
            "group-[.toast]:shadow-[var(--shadow-button)]",
          ].join(" "),
          cancelButton: [
            "group-[.toast]:bg-[var(--color-bg-raised)]",
            "group-[.toast]:text-[var(--color-fg-muted)]",
            "group-[.toast]:border group-[.toast]:border-[var(--color-border)]",
            "group-[.toast]:rounded-[var(--radius-sm)]",
            "group-[.toast]:font-medium group-[.toast]:text-xs",
          ].join(" "),
          // Semantic variants — mirror .alert-* in index.css
          success: [
            "group-[.toaster]:border-[color-mix(in_oklch,var(--color-success),transparent_60%)]",
            "group-[.toaster]:bg-[var(--color-success-muted)]",
            "group-[.toaster]:text-[var(--color-success)]",
          ].join(" "),
          error: [
            "group-[.toaster]:border-[color-mix(in_oklch,var(--color-danger),transparent_60%)]",
            "group-[.toaster]:bg-[var(--color-danger-muted)]",
            "group-[.toaster]:text-[var(--color-danger)]",
          ].join(" "),
          warning: [
            "group-[.toaster]:border-[color-mix(in_oklch,var(--color-warning),transparent_60%)]",
            "group-[.toaster]:bg-[var(--color-warning-muted)]",
            "group-[.toaster]:text-[var(--color-warning)]",
          ].join(" "),
          info: [
            "group-[.toaster]:border-[color-mix(in_oklch,var(--color-info),transparent_60%)]",
            "group-[.toaster]:bg-[var(--color-info-muted)]",
            "group-[.toaster]:text-[var(--color-info)]",
          ].join(" "),
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };