import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/Layouts/MainLayout";
import Providers from "@/lib/Providers";
export const metadata: Metadata = {
  title: "Shadi Mubarak",
  description: "Shadi Mubarak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers> 
      <html lang="en">
        <body>
          <MainLayout>
            {children}
          </MainLayout>
        </body>
      </html>
    </Providers>
  );
}
