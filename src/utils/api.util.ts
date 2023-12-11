import { bestMobile, featuredCategories, sliderImg } from "./db.util";
import { FeaturedProduct } from "./types.utils";

const getSlidetImgs = (): string[] => {
  return sliderImg;
};

const getFeaturedCategories = (): string[] => {
  return featuredCategories;
};

const getFeaturedProduct = (cat: string): FeaturedProduct[] => {
  if (cat === "mobile") return bestMobile;
  else return [];
};

const getBestDeals = (): string[][] => {
  const imgList = [
    [
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/b8baae376137c89e.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/07b437dc74cb4f25.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/001d5002a4adeeaf.jpg",
    ],
    [
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/510a537440b39340.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/c4099de7a5297e8c.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/938d3168fe80f9b6.jpg",
    ],
    [
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/8fe2200021bd4938.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e900d663d029165e.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/838aae0f740696c8.jpg",
    ],
    [
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/66a95f7b8a2de8d0.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/5549c8378ebc39ec.jpg",
      "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/62f485577d8e3f7c.jpg",
    ],
  ];

  return imgList;
};

export {
  getFeaturedCategories,
  getSlidetImgs,
  getFeaturedProduct,
  getBestDeals,
};
