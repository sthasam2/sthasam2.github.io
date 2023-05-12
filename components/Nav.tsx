"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/data/headerNavLink";
import { NavButton } from "./NavButton";
import { Avatar, PlaceholderAvatar } from "./Avatar";
import { siteMetadata } from "@/data/siteMetadata";

export function Nav(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 py-3 overflow-x-hidden backdrop-blur">
        <div className="flex items-center justify-between max-w-3xl px-3 mx-auto xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/">
              {siteMetadata.siteLogo != "" ? (
                <Avatar src={siteMetadata.siteLogo} />
              ) : (
                <PlaceholderAvatar label={siteMetadata.initials} />
              )}
              <span className="ml-2 text-base font-bold ">
                {siteMetadata.author}
              </span>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
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
        </div>
      </header>
    </>
  );
}
