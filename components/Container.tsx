import React from "react";

export const Container = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <div className="mx-auto max-w-3xl px-5 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
};
