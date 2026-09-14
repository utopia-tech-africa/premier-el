import Image from "next/image";
import Link from "next/link";
import {
  ArrowSquareUpRight,
  EnvelopeIcon,
  InstagramLogo,
  LinkedinLogo,
  MailIcon,
  premierElLogo,
} from "@/assets";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

const socialIcons = {
  instagram: InstagramLogo,
  email: EnvelopeIcon,
  linkedin: LinkedinLogo,
} as const;

export function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-neutral-100">
      <Container className="flex flex-col gap-12 py-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative h-[39px] w-[106px] shrink-0">
              <Image
                src={premierElLogo}
                alt={siteConfig.name}
                fill
                sizes="106px"
                className="object-contain object-left"
              />
            </Link>

            <nav
              aria-label="Footer"
              className="flex flex-wrap gap-8 text-sm leading-[1.2] text-neutral-800"
            >
              {siteConfig.footerNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <ul className="flex items-start gap-6">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex"
                    >
                      <Icon />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex w-full max-w-[500px] flex-col gap-4">
            <h2 className="text-[1.75rem] leading-[1.2] font-bold text-neutral-900 md:text-[2.125rem]">
              Unlock your true potential
            </h2>
            <p className="text-sm leading-[1.2] text-neutral-800">
              Join our waitlist to get a free hiring template and stay up to
              date
            </p>

            <form className="flex w-full flex-col gap-3" action="#">
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex h-[50px] min-w-0 flex-1 items-center rounded border border-neutral-200">
                  <span className="flex shrink-0 items-center px-4 py-3.5">
                    <MailIcon />
                  </span>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="h-full min-w-0 flex-1 rounded-none border-0 bg-transparent px-4 py-3.5 text-sm shadow-none focus-visible:ring-0"
                  />
                </div>
                <Button
                  type="submit"
                  className={cn(
                    "h-auto shrink-0 gap-2.5 rounded px-6 py-3 text-base font-normal"
                  )}
                >
                  Subscribe
                  <ArrowSquareUpRight />
                </Button>
              </div>
              <p className="text-xs leading-[1.5] text-neutral-600">
                By subscribing you agree to our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-neutral-300 pt-8">
          <div className="flex flex-col gap-4 text-sm leading-[1.5] lg:flex-row lg:items-start lg:justify-between">
            <nav
              aria-label="Legal"
              className="flex flex-wrap gap-6 text-neutral-600"
            >
              {siteConfig.legal.map((item) => (
                <Link key={item.href} href={item.href} className="underline">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="#" className="underline text-neutral-700">
              Powered by Utopia Tech
            </Link>
            <p className="underline text-neutral-700">
              © {new Date().getFullYear()} Premier El Consult. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
