'use client';

import { Dispatch, SetStateAction } from 'react';

export function SideNav({
  sidebarToggle,
  setSidebarToggle,
}: {
  sidebarToggle: boolean;
  setSidebarToggle: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="btn btn-square btn-ghost"
      onClick={() => setSidebarToggle((prev) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 512 512"
        className="inline-block w-6 h-6 stroke-current"
      >
        {sidebarToggle ? (
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        ) : (
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        )}
      </svg>
    </button>
  );
}
