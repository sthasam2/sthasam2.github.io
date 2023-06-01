"use client";

import { useThemeExtended } from "@/hooks/themeHooks";

export function Greeting({ message }: { message: string }): JSX.Element {
  const { isLight } = useThemeExtended();

  let className: string =
    (isLight
      ? "bg-gradient-to-r from-yellow-600 to-red-600"
      : "bg-gradient-to-l from-emerald-500 to-lime-600") +
    " bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px] mb";

  return <div className={className}>{message}</div>;
}
