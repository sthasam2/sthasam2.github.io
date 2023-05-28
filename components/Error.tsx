"use client";

import { useEffect, useState } from "react";

export function Error({ message, error }: { message: string; error?: any }) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    setInterval(() => setMounted(false), 5000);
  }, []);

  const handleClick = () => {
    setMounted(false);
  };

  console.log(error);
  return mounted ? (
    <div className="fixed bottom-32">
      <div className="alert alert-error sticky z-50 h-min max-h-44 w-max max-w-md shadow-lg sm:px-4">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>

          <button className="btn-ghost btn" title="close" onClick={handleClick}>
            <svg
              fill="currentColor"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490 490"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
