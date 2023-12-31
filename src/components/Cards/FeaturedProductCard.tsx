import React from "react";
import { FeaturedProduct } from "../../utils/types.utils";
import { Link } from "react-router-dom";

const FeaturedProductCard = ({ img, title, desc }: FeaturedProduct) => {
  return (
    <div className="flex flex-col justify-center items-center border px-2 md:px-4 py-1 gap-1 min-w-[6rem] text-center rounded-md">
      <Link to={"/product/1"}>
        <img className="w-12 md:w-44" src={img} alt={title} />
        <h3 className="text-xs md:text-md">{title}</h3>
        <h3 className="font-medium text-xs md:text-md">{desc}</h3>
      </Link>
    </div>
  );
};

export default FeaturedProductCard;
