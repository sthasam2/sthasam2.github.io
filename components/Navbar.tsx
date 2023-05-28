"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { darkTheme, headerNavLinks } from "@/data";
import { siteMetadata } from "@/data/siteMetadata";
import { headerNavLink } from "@/types";

import { Avatar, PlaceholderAvatar } from "./Avatar";
import { SideNavButton } from "./MobileNavButton";
import { SideNav } from "./MobileNavToggle";
import { NavButton } from "./NavButton";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Nav() {
  const pathname = usePathname();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const isDark = theme === darkTheme || resolvedTheme === darkTheme;

  useEffect(() => {
    setSidebarToggle(false);
  }, [pathname]);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-40 col-start-1 row-start-1 h-fit overflow-x-hidden py-3 backdrop-blur-md",
        isDark ? "bg-black/30" : "bg-white/30"
      )}
    >
      <div className="flex items-center justify-between max-w-3xl px-3 mx-auto xl:max-w-5xl xl:px-0">
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
            ? " grid-col-1 grid justify-center space-y-4 p-4 md:hidden min-h-[80%]"
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
    </nav>
  );
}
