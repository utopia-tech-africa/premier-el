"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { premierElLogo } from "@/assets";
import { Container } from "@/components/layout";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="flex items-center justify-center py-4 md:py-8">
        <nav
          aria-label="Primary"
          className={cn(
            "w-full max-w-lg overflow-hidden border-[0.5px] border-neutral-500 bg-neutral-100 shadow-[2px_2px_17px_0px_rgba(0,0,0,0.15)] md:w-auto md:max-w-none",
            open ? "rounded-3xl" : "rounded-full"
          )}
        >
          <div className="flex items-stretch">
            <div className="flex min-w-0 flex-1 items-center gap-4 px-4 py-3 sm:gap-8 sm:px-6">
              <Link
                href="/"
                className="relative h-[25px] w-[106px] shrink-0"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={premierElLogo}
                  alt={siteConfig.name}
                  fill
                  sizes="106px"
                  className="object-contain object-left"
                  priority
                />
              </Link>

              <ul className="hidden items-center gap-8 text-base leading-6 font-medium text-neutral-800 md:flex">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="whitespace-nowrap">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-neutral-800 md:hidden"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                <span
                  aria-hidden
                  className="relative block size-5"
                >
                  <span
                    className={cn(
                      "absolute top-[7px] left-0 block h-0.5 w-5 bg-current transition-transform duration-200",
                      open && "translate-y-[5px] rotate-45"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute top-[12px] left-0 block h-0.5 w-5 bg-current transition-opacity duration-200",
                      open && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute top-[17px] left-0 block h-0.5 w-5 bg-current transition-transform duration-200",
                      open && "-translate-y-[5px] -rotate-45"
                    )}
                  />
                </span>
              </button>
            </div>

            <Link
              href={siteConfig.cta.href}
              className="relative hidden items-center justify-center overflow-hidden bg-neutral-100 px-4 py-3 text-base leading-6 font-medium whitespace-nowrap text-neutral-800 transition-colors duration-300 before:absolute before:inset-0 before:bg-[linear-gradient(180deg,#224cff_0%,#00c1d5_100%)] before:opacity-0 before:transition-opacity before:duration-300 hover:text-neutral-100 hover:before:opacity-100 md:flex"
              onClick={() => setOpen(false)}
            >
              <span className="relative z-10">{siteConfig.cta.label}</span>
            </Link>
          </div>

          <div
            id={menuId}
            className={cn(
              "grid transition-[grid-template-rows] duration-200 md:hidden",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-1 border-t border-neutral-200 px-4 py-3 text-base leading-6 font-medium text-neutral-800">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-2 py-2.5"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={siteConfig.cta.href}
                    className="mt-1 block rounded-lg bg-brand-navy px-2 py-2.5 text-center text-neutral-100"
                    onClick={() => setOpen(false)}
                  >
                    {siteConfig.cta.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
