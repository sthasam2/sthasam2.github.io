"use client";

import { useThemeExtended } from "@/hooks/themeHooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { darkTheme, headerNavLinks } from "@/data";
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
  const { isLight } = useThemeExtended();

  useEffect(() => {
    setSidebarToggle(false);
  }, [pathname]);

  return (
    <nav
      className={`
        sticky top-0 z-40 col-start-1 row-start-1 h-fit w-full overflow-x-hidden py-3 backdrop-blur border-b 
        ${
          isLight
            ? "bg-white/10 border-slate-900/10"
            : "bg-black/10 border-gray-500/20"
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <div className="flex flex-row">
                <div className="h-10" title="Go to Homepage">
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
                    active={pathname.includes(link.slug)}
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
