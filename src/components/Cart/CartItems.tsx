import Item from "./Item";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector((state: RootState) => state.cartSlice);

  return (
    <div>
      <Item qty={cart[0].quantity} />
      <Item qty={cart[0].quantity} />
      <div className="px-6  py-4 text-right sticky bottom-0 bg-white box-shadow-top border-t ">
        <button className="bg-[#fb641b] h-12 w-60 text-white font-semibold text-base">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CartItems;
