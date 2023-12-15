import { CartItems, PriceDetails } from "../../components";

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto pt-8 flex justify-between pb-4">
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
        <div className="bg-white mt-4 border text-sm">
          <CartItems />
        </div>
      </div>
      <PriceDetails />
    </div>
  );
};

export default Cart;
