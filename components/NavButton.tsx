import Link from "next/link";

import { NavButtonProps } from "@/types/components";

export function NavButton({ title, href, active }: NavButtonProps) {
  return (
    <Link
      title={title + " page"}
      href={href}
      className={`btn-ghost btn-sm btn ${active ? "btn-active" : ""}`}
    >
      {title}
    </Link>
  );
}
