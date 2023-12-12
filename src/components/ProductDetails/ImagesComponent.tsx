import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillFastForwardFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";

const ImagesComponent = ({ productId }: { productId: string }) => {
  const [heroImg, setHeroImg] = useState<string>(
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/r/a/-original-imagrdvzn2mtjae8.jpeg?q=70"
  );
  const imgList: string[] = [
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/r/a/-original-imagrdvzn2mtjae8.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/i/a/-original-imagrdefjfg5y45r.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/q/l/-original-imagrdef2ggvx6fy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/r/7/-original-imagrdefdgbdzgc7.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/0/o/-original-imagrdefhdayvnn6.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/d/8/-original-imagrdefj8j33zgn.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/s/p/-original-imagrdefpqecnzyw.jpeg?q=70",
  ];

  const dispatch = useDispatch();

  const HandleAddToCart = () => {
    dispatch(addToCart({ productId: productId, quantity: 1 }));
  };
  return (
    <div className={`w-[40%] h-full sticky top-16 p-4`}>
      <div className="h-[450px] flex border border-gray-300">
        {/* small image bar */}
        <div className="h-full w-fit overflow-y-auto border-r border-gray-300">
          {imgList.map((img, i) => (
            <div
              key={i}
              className="flex justify-center items-center border-b border-gray-300 w-[63px] h-[63px]"
            >
              <button className="h-full" onClick={() => setHeroImg(img)}>
                <img className="h-full p-1" src={img} alt="imag-1" />
              </button>
            </div>
          ))}
        </div>
        {/* Hero Image */}
        <div className="flex w-full justify-center items-center">
          <img className="h-full p-4" src={heroImg} alt="" />
        </div>
      </div>

      {/* Cart buttons */}
      <div className="flex justify-center gap-5 mt-3 text-white text-lg">
        <div className="flex bg-[#ff9f00] justify-center items-center w-56 h-14 gap-2 cursor-pointer">
          <FaShoppingCart />
          <button onClick={HandleAddToCart}>ADD TO CART</button>
        </div>
        <div className="flex  bg-[#fb641b] justify-center items-center w-56 h-14 gap-2 cursor-pointer">
          <BsFillFastForwardFill />
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ImagesComponent;
