import React from "react";
import { Link } from "react-router-dom";

const SearchDropDown = ({ catagory }: { catagory: string }) => {
  return (
    <div className="grid grid-cols-5 bg-white w-full justify-between h-[500px] px-1 border border-slate-100">
      <div>
        <Link to={"/"}>Mobiles</Link>
      </div>
      <div className="bg-slate-100">
        <Link to={"/"}>Mobiles</Link>
      </div>
      <div>
        <Link to={"/"}>Mobiles</Link>
      </div>
      <div className="bg-slate-100">
        <Link to={"/"}>Mobiles</Link>
      </div>
      <div>
        <Link to={"/"}>Mobiles</Link>
      </div>
    </div>
  );
};

export default SearchDropDown;
