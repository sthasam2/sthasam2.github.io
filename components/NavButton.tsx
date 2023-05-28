import clsx from "clsx";
import Link from "next/link";

import { NavButtonProps } from "@/types/components";

export function NavButton({ title, href, active }: NavButtonProps) {
  return (
    <Link
      href={href}
      className={clsx("btn-ghost btn-sm btn", active ? "btn-active" : "")}
    >
      {title}
    </Link>
  );
}
