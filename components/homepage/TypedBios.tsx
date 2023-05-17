"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedBios({ bios }: { bios: string[] }) {
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
        {bios.map((bio) => (
          <li key={bios.indexOf(bio)}>{bio}</li>
        ))}
      </ul>
      <span ref={el} />
    </div>
  );
}
