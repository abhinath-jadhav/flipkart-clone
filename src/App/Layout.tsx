import React from "react";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
      </div>

      <div className="bg-slate-100 min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
