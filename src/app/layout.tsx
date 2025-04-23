import type { Metadata } from "next";
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import Providers from "@/lib/Providers";
import MainLayout from "@/components/Layouts/MainLayout";

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
