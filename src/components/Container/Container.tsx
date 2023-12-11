import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} max-w-[1600px] flex justify-center mx-auto z-20`}
    >
      {children}
    </div>
  );
};

export default Container;
