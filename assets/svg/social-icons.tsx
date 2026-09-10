import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function SocialIcon({
  src,
  className,
  size = 32,
}: {
  src: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("relative shrink-0 overflow-clip", className)}
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt=""
        width={size}
        height={size}
        className="size-full"
      />
    </span>
  );
}

export function InstagramLogo({ className }: IconProps) {
  return (
    <SocialIcon src="/icons/instagram-logo.svg" className={className} />
  );
}

export function EnvelopeIcon({ className }: IconProps) {
  return <SocialIcon src="/icons/envelope.svg" className={className} />;
}

export function LinkedinLogo({ className }: IconProps) {
  return <SocialIcon src="/icons/linkedin-logo.svg" className={className} />;
}

export function MailIcon({ className }: IconProps) {
  return (
    <SocialIcon src="/icons/mail.svg" className={className} size={16} />
  );
}
