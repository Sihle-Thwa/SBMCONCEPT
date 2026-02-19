import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-[var(--space-6)]",
        "has-[>[data-slot=checkbox-group]]:gap-[var(--space-3)]",
        "has-[>[data-slot=radio-group]]:gap-[var(--space-3)]",
        className,
      )}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-[var(--space-3)] font-medium text-[var(--color-fg)]",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm data-[variant=label]:text-[var(--color-fg-muted)]",
        className,
      )}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group",
        "flex w-full flex-col gap-[var(--space-7)]",
        "data-[slot=checkbox-group]:gap-[var(--space-3)]",
        "[&>[data-slot=field-group]]:gap-[var(--space-4)]",
        className,
      )}
      {...props}
    />
  );
}

const fieldVariants = cva(
  [
    "group/field flex w-full gap-[var(--space-3)]",
    // Invalid state — danger color
    "data-[invalid=true]:text-[var(--color-danger)]",
  ],
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start",
          "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
          "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start",
          "@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        className,
      )}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        // Base — .label
        "group/field-label peer/field-label flex w-fit gap-[var(--space-2)] leading-snug",
        "text-[var(--color-fg-muted)]",
        // Disabled via parent field
        "group-data-[disabled=true]/field:opacity-50",
        // When wrapping a field slot — card-like treatment using design tokens
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        "has-[>[data-slot=field]]:rounded-[var(--radius-md)] has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-[var(--color-border)]",
        "[&>*]:data-[slot=field]:p-[var(--space-4)]",
        // Checked highlight — primary muted tint
        "has-data-[state=checked]:bg-[var(--color-primary-muted)] has-data-[state=checked]:border-[var(--color-border-primary)]",
        "transition-[background-color,border-color] duration-[var(--duration-fast)]",
        className,
      )}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-[var(--space-2)]",
        "text-sm font-medium leading-snug",
        "text-[var(--color-fg)]",
        "group-data-[disabled=true]/field:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-sm leading-normal font-normal",
        "text-[var(--color-fg-muted)]",
        "group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        // Inline links
        "[&>a]:text-[var(--color-primary)] [&>a]:underline [&>a]:underline-offset-4",
        "[&>a:hover]:text-[var(--color-primary-hover)]",
        className,
      )}
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm",
        "group-data-[variant=outline]/field-group:-mb-2",
        className,
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2 bg-[var(--color-border)]" />
      {children && (
        <span
          className="relative mx-auto block w-fit px-[var(--space-2)] bg-[var(--color-bg)] text-[var(--color-fg-subtle)] text-xs uppercase tracking-[var(--tracking-wider)]"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const content = useMemo(() => {
    if (children) return children;

    if (!errors?.length) return null;

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors.length === 1) return uniqueErrors[0]?.message;

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) return null;

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn(
        "text-sm font-normal",
        "text-[var(--color-danger)]",
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};