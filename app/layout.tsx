import "@/css/globals.css";
import { Outfit } from "next/font/google";
import { Nav } from "@/components/Nav";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sambeg's Blog",
  description: "A cosmos of possibilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={outfit.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
