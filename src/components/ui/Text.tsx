import { type ComponentProps } from "react";
import { cn } from "../../lib/utils";

export type TextProps = ComponentProps<"p"> & {
  variant?: "default" | "lead" | "muted";
};

export function Text({ className, variant = "default", ...props }: TextProps) {
  return (
    <p
      className={cn(
        {
          "text-base text-gray-700": variant === "default",
          "text-lg text-gray-500 sm:text-xl": variant === "lead",
          "text-sm text-gray-500": variant === "muted",
        },
        className
      )}
      {...props}
    />
  );
}