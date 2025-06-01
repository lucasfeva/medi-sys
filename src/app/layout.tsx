import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MediSys",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
