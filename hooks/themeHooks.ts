"use client";

import { darkTheme, lightTheme } from "@/data/constants";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeExtended = () => {
  const [isLight, setIsLight] = useState<boolean>(true);
  const { ...props } = useTheme();

  useEffect(() => {
    setIsLight(
      () =>
        props.theme === lightTheme ||
        props.resolvedTheme === lightTheme ||
        props.systemTheme === "light"
    );

    if (localStorage.theme) props.setTheme(localStorage.theme);
    if (props.theme === lightTheme) localStorage.theme = lightTheme;
    if (props.theme === darkTheme) localStorage.theme = darkTheme;
  }, [props]);

  return { isLight, ...props };
};

export { useThemeExtended };
