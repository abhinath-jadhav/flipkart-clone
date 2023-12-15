import React, { useEffect, useState } from "react";

const Item = ({ qty }: { qty: number }) => {
  const [qtyState, setQtyState] = useState(qty);

  const reduceQty = () => {
    if (qtyState > 1) {
      console.log("if");

      setQtyState((state) => state - 1);
    } else {
      console.log("else");
    }
  };
  const addQty = () => {
    setQtyState((state) => state + 1);
  };

  useEffect(() => {});
  return (
    <div className=" border-b">
      <div className="flex w-full p-6">
        <img
          className="w-24 pl-2"
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70"
          alt="main images"
        />
        <div className="w-full flex justify-between ml-8 ">
          <div>
            <p className="text-base">Nothing Phone (2) (White, 256 GB)</p>
            <p>12GB RAM</p>
            <p>Seller:Clostail</p>
            <p className="flex gap-2 items-baseline">
              <span className="text-gray-500 line-through">₹54,999</span>
              <span className="text-lg font-semibold">₹41,999 </span>
              <span className="text-green-700 font-semibold">23% Off</span>
            </p>
          </div>
          <p>
            Delivery by Fri Dec 15 |{" "}
            <span className="text-gray-500 line-through">₹40</span>{" "}
            <span className="text-green-700 font-semibold">Free</span>
          </p>
        </div>
      </div>
      <div className="flex w-full p-6 pb-3">
        <div className="bg-slate-100 w-full border p-4">
          <p className="text-base font-semibold"> Complete Protection Plan</p>
          <div className="mt-4 flex">
            <img
              className="w-18 h-16"
              src="https://rukminim2.flixcart.com/image/144/144/xif0q/damage-protection-plan/d/0/h/-original-imagksgfefawgqfs.jpeg?q=90"
              alt=""
            />
            <div className="px-4">
              <p>Complete Mobile Protection</p>
              <p>1 Year</p>
              <p className="flex gap-2 items-baseline mt-2">
                <span className="text-lg font-semibold">₹2,199 </span>
                <span className="text-gray-500 line-through">₹2,699</span>
                <span className="text-green-700 font-semibold">18% Off</span>
              </p>
              <p className="text-sm mt-2">
                Get brand authorised repairs for all phone damages with free
                pickup and drop. If we can't repair it, we will replace it{" "}
                <a
                  href={
                    "https://www.flipkart.com/mobile-complete-protection-bbd--9033-6702-store"
                  }
                  className="text-blue-600"
                  rel="noreferrer"
                  target="_blank"
                >
                  !Know More
                </a>
              </p>
            </div>
            <button className="text-white bg-[#ff9f00] w-72 h-12 shadow-sm shadow-[#ff9f00]">
              Add Item
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-6 pt-3 gap-6 text-base">
        <div className="flex gap-1">
          <div className="border text-slate-500 rounded-full h-6 w-6 flex justify-center items-center">
            <button onClick={reduceQty} className="">
              -
            </button>
          </div>

          <p className="border h-6 w-12 flex justify-center items-center border-gray-300 ">
            {qtyState}
          </p>
          <div className="border border-gray-400 rounded-full h-6 w-6 flex justify-center items-center">
            <button onClick={addQty} className="">
              +
            </button>
          </div>
        </div>
        <button className="font-semibold">SAVE FOR LATER</button>
        <button className="font-semibold">REMOVE</button>
      </div>
    </div>
  );
};

export default Item;
