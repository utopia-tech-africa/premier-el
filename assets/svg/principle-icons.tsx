import { cn } from "@/lib/utils";

type IconProps = { className?: string };

function PrincipleIcon({
  src,
  className,
}: IconProps & { src: string }) {
  return (
    <span className={cn("relative size-12 shrink-0 overflow-clip", className)}>
      <img src={src} alt="" width={48} height={48} className="size-full" />
    </span>
  );
}

export function IconMedal({ className }: IconProps) {
  return <PrincipleIcon src="/icons/icon-medal.svg" className={className} />;
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <PrincipleIcon src="/icons/icon-shield-check.svg" className={className} />
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <PrincipleIcon src="/icons/icon-handshake.svg" className={className} />
  );
}

export function IconChartLineUp({ className }: IconProps) {
  return (
    <PrincipleIcon src="/icons/icon-chart-line-up.svg" className={className} />
  );
}
