import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/Layouts/MainLayout";
import Providers from "@/lib/Providers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
export const metadata: Metadata = {
  title: "Shadi Mubarak",
  description: "Shadi Mubarak",
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
        className="dark:bg-slate-900 text-slate-500 bg-white dark:text-slate-400 antialiased "
      >
        <body>
          <NextIntlClientProvider>
            <MainLayout>{children}</MainLayout>
          </NextIntlClientProvider>
        </body>
      </html>
    </Providers>
  );
}
