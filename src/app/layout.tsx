import MainLayout from "@/components/Layouts/MainLayout";
import WhatsAppButton from "@/components/UI/WhatsAppButton";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biyer Thikana",
  description:
    "Biyer Thikana is a platform that connects couples for their perfect match.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <Providers>
      <html
        lang={locale}
        className='dark:bg-slate-900 text-slate-500 bg-white dark:text-slate-400 antialiased '>
        <body>
          <NextIntlClientProvider>
            <MainLayout>{children}</MainLayout>
          </NextIntlClientProvider>
          <WhatsAppButton />
        </body>
      </html>
    </Providers>
  );
}
