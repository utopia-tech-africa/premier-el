import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function IconTarget({ className }: IconProps) {
  return (
    <span className={cn("relative size-12 shrink-0 overflow-clip", className)}>
      <img
        src="/icons/icon-target.svg"
        alt=""
        width={48}
        height={48}
        className="size-full"
      />
    </span>
  );
}
