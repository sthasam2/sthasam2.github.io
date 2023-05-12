import clsx from "clsx";
import { NavButtonProps } from "@/types/components";
import Link from "next/link";

export function NavButton({ title, href, active }: NavButtonProps) {
  let className = clsx("btn btn-sm btn-ghost ml-2", active ? "btn-active" : "");

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}
