import { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { category } from "../../utils/db.util";
import SortByBar from "./SortByBar";
import { SearechProductCard } from "..";
import { Category, Product } from "../../utils/types.util";

const SearchBody = ({ className }: { className: string }) => {
  const [categories, setCategory] = useState<Category>({ name: "" });

  useEffect(() => {
    setCategory(category);
  }, []);

  const renderHeading = (category: Category | null): ReactNode => {
    if (category?.subCategory === null) {
      return <div>{category.name}</div>;
    } else if (category) {
      return category.subCategory && renderHeading(category.subCategory);
    }
  };

  const product: Product = {
    id: "1",
    title: "realme C53 (Champion Gold, 128 GB)",
    review: "4.470,397 Ratings & 3,140 Reviews",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70",
    features: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 2 TB",
      "17.12 cm (6.74 inch) HD Display",
      "108MP + 2MP | 8MP Front Camera",
      "5000 mAh Battery",
      "T612 Processor",
      "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
    ],
    price: "11,999",
    offerPrice: "13,999",
    offer: 14,
    delivery: "19th Nov",
    assured: true,
  };

  const renderCategories = (category: Category | null) => {
    if (!category) {
      return null;
    }

    return (
      <div className="flex gap-1 text-sm text-gray-500" key={category.name}>
        {category.name.toLowerCase() === "home" ? (
          <Link to={`/`}>{category.name}</Link>
        ) : (
          <Link to={`/${category.name}`}>{category.name}</Link>
        )}
        {category.subCategory ? <span>{">"}</span> : null}

        {category.subCategory && renderCategories(category.subCategory)}
      </div>
    );
  };
  return (
    <div className={`${className} bg-white`}>
      {category && renderCategories(categories)}
      <div className="text-lg my-2 font-semibold flex items-center gap-2">
        {category && renderHeading(categories)}
        <p className="text-xs font-light">
          (Showing result 1-24 results off 488 products)
        </p>
      </div>
      <SortByBar />
      <SearechProductCard product={product} />
      <SearechProductCard product={product} />
    </div>
  );
};

export default SearchBody;
