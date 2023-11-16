import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1600px] flex justify-center mx-auto">{children}</div>
  );
};

export default Container;
