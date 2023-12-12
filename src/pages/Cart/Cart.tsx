const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto pt-8 flex justify-between">
      <div className="w-[68%]">
        <div className="flex justify-between items-center bg-white h-20 border">
          <div className="text-sm px-4 pt-3">
            <p>Deliver to Abhinath Jadhav, 415103</p>
            <p>Jadhav Niwas, Near Anath Ashram, Kole stop...</p>
          </div>
          <div className="px-4 pt-3 pb-3">
            <button className="text-blue-700 text-sm border px-4 py-2">
              Change
            </button>
          </div>
        </div>
      </div>
      <div className="w-[30%] bg-white border pt-2">
        <p className="border-b px-4 pb-2 font-semibold text-gray-400">
          PRICE DETAILS
        </p>
        <div className="px-4 pt-4 flex flex-col gap-5 ">
          <div className="flex justify-between">
            <p>Price (2 items)</p>
            <p>₹55,000</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p className="text-green-700">− ₹13,001</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Charges</p>
            <p className="">
              <span className="text-gray-500 line-through">₹40 </span>
              <span className="text-green-700 ml-2">Free</span>
            </p>
          </div>
          <div className="flex justify-between border-b pb-5">
            <p>Secured Packaging Fee</p>
            <p>₹99</p>
          </div>
          <div className="flex justify-between pb-4 text-lg border-b">
            <p className="font-semibold">Total Amount</p>
            <p className="font-semibold">₹42,098</p>
          </div>
          <div className="pb-4 text-green-700 font-semibold">
            <p>You will save ₹12,902 on this order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
