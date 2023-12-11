import Logo from "../../assets/logo.png";
import Store from "../../assets/Store.svg";
import Arrow from "../../assets/arrow.svg";
import Profile from "../../assets/profile.svg";
import VerticalDots from "../../assets/verticalDots.svg";
import Cart from "../../assets/header_cart.svg";
import Search_icon from "../../assets/search.svg";
import Container from "../Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate("/search-result");
    }
  };
  return (
    <div className="bg-white">
      <Container>
        <div className="flex w-full items-center px-4 py-1 h-[66px] md:gap-8 ">
          <div className="flex w-[80%] md:w-[70%] gap-4 md:gap-12 items-center">
            <div>
              <Link to={"/"}>
                <img className="w-[120px]" src={Logo} alt="Flipkart" />
              </Link>
            </div>
            {/* Search */}
            <div className="w-[70%] relative bg-slate-100 rounded-md p-2">
              <img
                className="absolute h-6 w-6 top-2 left-1"
                src={Search_icon}
                alt="search"
              />
              <input
                className="pl-8 w-full bg-transparent outline-none"
                type="text"
                placeholder="Search for Products, Brands and More"
                onKeyDown={(event) => handleSearch(event)}
              />
            </div>
          </div>
          {/* Mobile menu */}
          <div className="flex md:hidden gap-3 group cursor-pointer relative hover:border p-2 rounded-md">
            <img src={Profile} alt="profile" />
          </div>
          <div className="flex gap-2 md:hidden">
            <img src={Cart} alt="" />
          </div>
          {/* desktop menu */}
          <div className="hidden md:flex items-center justify-between w-[40%] text-md">
            <div className="flex gap-2">
              <img src={Store} alt="" />
              <h3>Become a Seller</h3>
            </div>
            {/* Profile */}
            <div className="flex gap-3 group cursor-pointer relative hover:border p-2 rounded-md">
              <img src={Profile} alt="profile" />
              <h3>Profile</h3>
              <img
                src={Arrow}
                alt="arrow"
                className="group-hover:rotate-180 duration-500"
              />
              {/* Drop Down Menu */}
              <div className="group-hover:block hidden absolute top-full left-0 p-4 text-sm border rounded-md shadow-md">
                <div className="flex flex-col gap-5">
                  <div className="flex w-auto gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>My Profile</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Super Coin Zone</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Flipkart Plus Zone</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Orders</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Wishlist</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Coupons</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Giftcards</h4>
                  </div>
                  <div className="flex w-[150px] gap-2 items-center">
                    <img className="h-[20px]" src={Profile} alt="" />
                    <h4>Logout</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Cart */}
            <div className="flex gap-2">
              <img src={Cart} alt="" />
              <h3>Cart</h3>
            </div>
            <div>
              <img src={VerticalDots} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
