import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IntroLoader, IntroProvider } from "@/components/intro-loader";
import { LenisProvider } from "@/components/lenis-provider";
import { siteConfig } from "@/constants";
import { helveticaNeue } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${helveticaNeue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <LenisProvider>
          <IntroProvider>
            <IntroLoader />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </IntroProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
