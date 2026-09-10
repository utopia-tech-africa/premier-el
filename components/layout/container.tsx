import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-4 md:px-8 xl:px-[var(--page-gutter)]",
        className
      )}
      {...props}
    />
  );
}
