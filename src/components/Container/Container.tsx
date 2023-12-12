import { ReactNode } from "react";

const Container = ({
  children,
  className,
  width,
}: {
  children: ReactNode;
  className?: string;
  width?: string;
}) => {
  return (
    <div
      className={`${className} flex justify-center mx-auto z-20 max-w-[${
        width ? width : "1600px"
      }]`}
    >
      {children}
    </div>
  );
};

export default Container;
