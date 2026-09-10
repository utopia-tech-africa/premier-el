import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function ArrowSquareUpRightLight({ className }: IconProps) {
  return (
    <span className={cn("relative size-6 shrink-0 overflow-clip", className)}>
      <img
        src="/icons/arrow-square-up-right-light.svg"
        alt=""
        width={24}
        height={24}
        className="size-full"
      />
    </span>
  );
}
