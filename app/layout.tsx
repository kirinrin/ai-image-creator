import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "AI Image Creator",
  description: "Create amazing images with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <LanguageProvider>
            <Header />
            <div className="pt-14">{children}</div>
            <Footer />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
