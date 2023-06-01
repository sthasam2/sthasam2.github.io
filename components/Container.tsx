import React from "react";

interface ContainerProps {
  className?: string;
}

export const Container = ({
  children,
  ...props
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <div className={props.className}>
      <div className="max-w-3xl px-5 mx-auto xl:max-w-5xl xl:px-0">
        {children}
      </div>
    </div>
  );
};
