import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, SearchHeader } from "../../components";

const ProductDetail = () => {
  const { id } = useParams();

  const imgList: string[] = [
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/r/a/-original-imagrdvzn2mtjae8.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/i/a/-original-imagrdefjfg5y45r.jpeg",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/q/l/-original-imagrdef2ggvx6fy.jpeg",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/r/7/-original-imagrdefdgbdzgc7.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/0/o/-original-imagrdefhdayvnn6.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/d/8/-original-imagrdefj8j33zgn.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/s/p/-original-imagrdefpqecnzyw.jpeg?q=70",
  ];

  return (
    <div className="">
      <div className={`bg-white border-b-2 border-gray-300`}>
        <Container className="bg-white">
          <SearchHeader />
        </Container>
      </div>
      <Container className="max-w-[1340px] bg-white">
        <div className="w-full flex">
          <div className={`w-[40%] h-[200px] sticky top-16 p-4`}>
            <div className="h-[450px] flex border border-gray-300">
              <div className="h-full overflow-y-auto border-r border-gray-300">
                {imgList.map((img, i) => (
                  <div
                    key={i}
                    className="flex justify-center items-center border-b border-gray-300 w-[63px] h-[63px]"
                  >
                    <img className="h-full p-2" src={img} alt="" />
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center items-center">
                <img
                  className="h-full p-4"
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=70"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[1400px] bg-red-400">dashj</div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
