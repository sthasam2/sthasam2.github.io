"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedBios() {
  let el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>Random Shit 1</li>
        <li>Second Random Shit 2</li>
        <li>Third Random Shit 3</li>
        <li>Fourth Random Shit 4</li></ul>
      <span ref={el} />
    </div>
  );
}
