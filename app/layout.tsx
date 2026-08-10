import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mafiacjeck — дизайн и разработка сайтов в Кыргызстане",
  description:
    "Портфолио цифрового дизайнера и разработчика. Сайты, UI/UX и брендинг для Кыргызстана и СНГ — от 5 000 сом.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/d08bafd725a4cfc309efb5a88e0b63a5?family=basis33"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
