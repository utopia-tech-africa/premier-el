export const siteConfig = {
  name: "Premier EL Consult",
  description:
    "Premier EL Consult aids organizations and investors in growth through strategic advisory, leadership development, and market entry solutions.",
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Case studies", href: "/#case-studies" },
    { label: "About us", href: "/#about" },
  ],
  footerNav: [
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact Us", href: "/#contact" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Email", href: "mailto:info@premierelconsult.com", icon: "email" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Settings", href: "/cookies" },
  ],
  cta: { label: "Book a call", href: "/#contact" },
} as const;
