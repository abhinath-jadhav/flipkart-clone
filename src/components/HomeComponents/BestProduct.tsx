import { useEffect, useState } from "react";
import { Container } from "..";
import { FeaturedProduct } from "../../utils/types.utils";
import FeaturedProductCard from "../Cards/FeaturedProductCard";
import { getFeaturedProduct } from "../../utils/api.util";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BestProduct = ({ cat }: { cat: string }) => {
  // Products for each catogory
  const [products, setProducts] = useState<FeaturedProduct[]>([]);

  // fetch data for each catagory
  useEffect(() => {
    const fetchData = async () => {
      setProducts(() => {
        const data: FeaturedProduct[] = getFeaturedProduct(cat);
        return data;
      });
    };

    fetchData();
  }, [cat]);

  return (
    <Container>
      <div className="w-full mt-5 bg-white dsa px-5 pb-6 md:pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-2xl font-semibold py-4 md:py-6">
            Best Mobile
          </h2>

          <Link to={"/"} className="text-blue-700 cursor-pointer">
            <IoChevronForwardCircleSharp size={25} />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 md:gap-8 overflow-x-auto ">
            {products.map((product) => (
              <FeaturedProductCard
                img={product.img}
                title={product.title}
                desc={product.desc}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BestProduct;
