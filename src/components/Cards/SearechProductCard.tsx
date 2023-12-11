import { Link } from "react-router-dom";
import { Product } from "../../utils/types.util";
import { FaStar } from "react-icons/fa";

interface ProductData {
  product: Product;
}

const SearechProductCard = ({ product }: ProductData) => {
  const bulletStyle = {
    color: "rgb(128 128 128)", // Your desired color
    marginRight: "0.5rem", // Adjust spacing between bullet and text
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div className="mt-5 border-b pb-10 grid grid-cols-10 px-4">
        <div className="flex justify-center items-center col-span-2">
          <img className="w-40" src={product.img} alt="" />
        </div>
        <div className="col-span-5">
          <h1 className="text-lg font-semibold">{product.title}</h1>
          <div>
            <h3 className="flex items-center gap-3 text-xs text-[#808080]">
              <span className="flex items-center justify-center px-[0.40rem] py-[0.10rem] gap-1 text-white bg-green-700 rounded-md ">
                <p>4.4</p> <FaStar />
              </span>
              {product.review}
            </h3>
          </div>
          <ul className="mt-2 text-gray-500">
            {product.features.map((data, i) => (
              <li className="text-sm text-black" key={i}>
                <span className="text-xl leading-none" style={bulletStyle}>
                  &#8226;
                </span>
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 flex gap-2">
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              ₹{product.offerPrice}
            </h1>
            <p className="text-[#808080] text-sm">
              <span className="line-through">₹{product.price}</span>{" "}
              <span className="text-green-700 font-semibold">
                {product.offer}% off
              </span>
            </p>
            <p className="text-xs">
              Free delivery by{" "}
              <span className="font-semibold">{product.delivery}</span>
            </p>
          </div>
          <div>
            {product.assured && (
              <img
                className="w-20"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="flipkart assured"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearechProductCard;
