import { IoIosArrowDown } from "react-icons/io";
import SearchDropDown from "./SearchDropDown";

const SearchHeader = () => {
  return (
    <div className="hidden lg:flex lg:min-w-[90%] mx-auto justify-between relative text-sm font-semibold py-2 z-40">
      <div className="flex items-center flex-grow gap-1 group cursor-pointer">
        <h3>Electronics</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="Electronics" />
        </div>
      </div>
      <div className="flex items-center flex-grow gap-1 px-1 group cursor-pointer">
        <h3>TV & Appliances</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="TV & Appliances" />
        </div>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Men</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="Electronics" />
        </div>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Women</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="Electronics" />
        </div>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Baby & Kids</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="Electronics" />
        </div>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Home & Furniture</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="Electronics" />
        </div>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Sports, Books & More</h3>
        <IoIosArrowDown className="mt-1" />
        <div className="absolute top-full left-0 w-full hidden group-hover:block">
          <SearchDropDown catagory="Electronics" />
        </div>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Flights</h3>
      </div>
      <div className="flex items-center flex-grow w-fit gap-1 px-1 group cursor-pointer ">
        <h3>Offer Zone</h3>
      </div>
    </div>
  );
};

export default SearchHeader;
