import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@web-components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "@web-components/Header";
import { isLightTheme } from "@web-utils/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Gamezop",
  description: "Best gaming platform in india.",
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isLight = await isLightTheme();

  return (
    <html
      lang={locale}
      className={isLight ? "light" : "dark"}
      style={{
        colorScheme: isLight ? "light" : "dark",
      }}
    >
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer isLightTheme={isLight} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
