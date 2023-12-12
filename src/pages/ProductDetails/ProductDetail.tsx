//import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  FetauresComponent,
  ListComponent,
  SearchHeader,
} from "../../components";
import { FaStar, FaTag } from "react-icons/fa";
import { SelectionCard } from "../../components";
import { SelectionData } from "../../utils/types.util";
import { useState } from "react";
import { specifications } from "../../utils/db.util";

const ProductDetail = () => {
  //const { id } = useParams();

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

  const offers = [
    "Eligible for Flipkart Pay Later",
    "Bank OfferAdditional ₹6000 Off On Credit and Debit Card Transactions",
    "Bank Offer10% Instant Discount on PNB Credit Cards, up to ₹1000, on orders of ₹5,000 and above",
    "Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,000 on orders of ₹5,000 and above",
  ];

  const selectionOption: SelectionData[] = [
    {
      detail: "128GB",
      img: "",
      isImgage: false,
    },
    {
      detail: "256GB",
      img: "",
      isImgage: false,
    },
  ];
  const ramOptions: SelectionData[] = [
    {
      detail: "8GB",
      img: "",
      isImgage: false,
    },
    {
      detail: "16GB",
      img: "",
      isImgage: false,
    },
  ];
  const colorOptions: SelectionData[] = [
    {
      detail: "White",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg",
      isImgage: true,
    },
    {
      detail: "Black",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg",
      isImgage: true,
    },
  ];

  const highlights: string[] = [
    "12 GB RAM | 256 GB ROM",
    "17.02 cm (6.7 inch) Full HD+ Display",
    "50 MP(OIS) +50MP | 32MP Front Camera",
    "4700 mAh Lithium ion Battery",
    "Qualcomm Snapdragon 8+ Gen 1 Processor",
    "LTPO AMOLED (1 Hz - 120 Hz)",
  ];

  return (
    <div className="">
      <div className={`bg-white border-b-2 border-gray-300`}>
        <Container className="bg-white">
          <SearchHeader />
        </Container>
      </div>
      <Container className="max-w-[1340px] bg-white">
        <div className="w-full flex mb-2 relative">
          {/* Left Section images */}
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
                <button>ADD TO CART</button>
              </div>
              <div className="flex bg-[#fb641b] justify-center items-center w-56 h-14 gap-2 cursor-pointer">
                <FaShoppingCart />
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          {/* Main details */}
          <div className="w-[60%] p-4">
            <h1>Nothing Phone (2) (White, 256 GB) (12 GB RAM)</h1>
            <div>
              <h3 className="flex items-center gap-3 text-xs text-[#808080] mt-1">
                <span className="flex items-center justify-center px-[0.40rem] py-[0.10rem] gap-1 text-white bg-green-700 rounded-md ">
                  <p>4.4</p> <FaStar />
                </span>
                4.470,397 Ratings & 3,140 Reviews
              </h3>
              <h3>Extra ₹13000 off</h3>
              <div className="flex items-end gap-3">
                <h1 className="text-3xl font-semibold">₹41,999</h1>
                <p className="line-through text-gray-500">₹54,999</p>
                <p className="text-green-700 font-semibold">23%off</p>
              </div>
              <p className="text-sm">+ ₹99 Secured Packaging Fee</p>
            </div>
            {/* Offers */}
            <div>
              <p className="font-semibold my-2">Available offers</p>

              {offers.map((offer, i) => (
                <div key={i}>
                  <div className="flex justify-start items-center gap-2 text-sm mt-2">
                    <FaTag color="rgb(21 128 61)" />
                    <p> {offer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p>
                1 Year Manufacturing Warranty{" "}
                <span className="font-semibold text-blue-700">Know More</span>
              </p>
            </div>
            {/* Selction buttons */}
            <div className="mt-8">
              <SelectionCard
                title="Colors"
                className="mt-2"
                data={colorOptions}
              />

              <SelectionCard
                title="Memory"
                className={"mt-6"}
                data={selectionOption}
              />
              <SelectionCard title="Ram" className={"mt-6"} data={ramOptions} />
            </div>
            <div>
              <ListComponent
                title="Highlights"
                className="mt-6"
                list={highlights}
              />
            </div>
            {/* Features */}
            <div>
              <FetauresComponent data={specifications} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
