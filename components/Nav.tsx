"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/data/headerNavLink";
import { NavButton } from "./NavButton";
import { Avatar, PlaceholderAvatar } from "./Avatar";
import { siteMetadata } from "@/data/siteMetadata";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Nav(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 overflow-x-hidden py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/">
              <div className="flex flex-row items-center space-x-4">
                <div>
                  {siteMetadata.siteLogo != "" ? (
                    <Avatar src={siteMetadata.siteLogo} />
                  ) : (
                    <PlaceholderAvatar label={siteMetadata.initials} />
                  )}
                </div>
                <div>
                  <span className="text-2xl font-bold">
                    {siteMetadata.author}
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-end space-x-2 text-base leading-5">
            <div className="hidden space-x-2 sm:block">
              {headerNavLinks.map((link) => {
                return (
                  <NavButton
                    key={link.id}
                    title={link.title}
                    href={link.href}
                    active={pathname == link.href}
                  />
                );
              })}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
}
