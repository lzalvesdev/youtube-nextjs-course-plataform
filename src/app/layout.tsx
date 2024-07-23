import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EducaNet - Cursos de programação gratuitos",
  description: "Uma plataforma para facilitar a vizualização de cursos gratuitos do youtube",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode;}> { }

export default function RootLayout({ children} : IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
