"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { darkTheme, headerNavLinks, lightTheme } from "@/data";
import { siteMetadata } from "@/data/siteMetadata";
import { headerNavLink } from "@/types";

import { Avatar, PlaceholderAvatar } from "./Avatar";
import { Container } from "./Container";
import { SideNavButton } from "./MobileNavButton";
import { SideNav } from "./MobileNavToggle";
import { NavButton } from "./NavButton";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Nav() {
  const pathname = usePathname();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDark = theme === darkTheme || resolvedTheme === darkTheme;

  useEffect(() => {
    setSidebarToggle(false);
    setTheme(lightTheme);
  }, [pathname, setTheme]);

  return (
    <nav
      className={clsx(
        // "sticky top-0 z-40  shadow-cyan-100/50 backdrop-blur-md dark:shadow-cyan-700/50",
        "sticky top-0 z-40 col-start-1 row-start-1 h-fit w-full overflow-x-hidden py-3 backdrop-blur  dark:border-gray-500/[0.06] lg:z-50 lg:border-b lg:border-slate-900/10",
        isDark ? "bg-black/10" : "bg-white/10"
      )}
    >
      <Container>
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <div className="flex flex-row">
                <div className="h-10">
                  {siteMetadata.siteLogo != "" ? (
                    <Avatar src={siteMetadata.siteLogo} />
                  ) : (
                    <PlaceholderAvatar label={siteMetadata.initials} />
                  )}
                </div>
              </div>
            </Link>
          </div>
          <div className="text-base leading-5">
            <div className="hidden space-x-2 sm:block">
              {headerNavLinks.map((link: headerNavLink, index) => {
                return (
                  <NavButton
                    key={index}
                    title={link.title}
                    href={link.href}
                    active={pathname == link.href}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex space-x-2">
            <ThemeSwitcher />
            <div className="md:hidden">
              <SideNav
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
              />
            </div>
          </div>
        </div>

        <div
          className={
            sidebarToggle
              ? "flex flex-col items-center justify-start space-y-4 p-4 md:hidden min-h-[80vh]"
              : "hidden "
          }
        >
          {headerNavLinks.map((link: headerNavLink) => {
            return (
              <SideNavButton
                key={link.title}
                title={link.title}
                href={link.href}
                active={pathname == link.href}
              />
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
