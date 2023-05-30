import "@/styles/globals.css";

import { Outfit } from "next/font/google";
import Head from "next/head";

import { Nav } from "@/components/Navbar";
import { CustomThemeProviders } from "@/components/ThemeSwitcher";
import { darkTheme, lightTheme } from "@/data/constants";
import { siteMetadata } from "@/data/siteMetadata";
import Footer from "@/components/Footer";

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
    <html lang="en" data-theme={`${lightTheme} dark:${darkTheme}`}>
      <Head>
        <title>{siteMetadata.fullName}</title>
        <meta name="description" content={siteMetadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${outfit.className} grid h-screen grid-cols-1`}
        suppressHydrationWarning={true}
      >
        <CustomThemeProviders>
          <Nav />
          <main className="col-start-1 row-start-1 mt-24 transition-colors duration-500">
            {children}
          </main>
          <Footer />
        </CustomThemeProviders>
      </body>
    </html>
  );
}
