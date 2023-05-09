"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/data/headerNavLink";

export function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 py-3 overflow-x-hidden supports-backdrop-blur:bg-white/95 bg-white/75 backdrop-blur dark:bg-dark/75">
        <div className="flex items-center justify-between max-w-3xl px-3 mx-auto xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/">Stha Sambeg</Link>
          </div>
          <div className="flex items-center text-base leading-5">
            {headerNavLinks.map((link) => {
              let className = clsx(
                "btn btn-sm btn-ghost",
                pathname == link.href ? "btn-active" : ""
              );

              return (
                <Link key={link.id} href={link.href} className={className}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
