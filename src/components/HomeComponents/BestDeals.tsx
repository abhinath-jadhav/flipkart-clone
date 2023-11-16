import React from "react";
import Container from "../Container/Container";

const BestDeals = ({ imgList }: { imgList: string[] }) => {
  return (
    <Container>
      <div className="w-full mt-5 bg-white dsa px-3 pb-6 md:pb-8 py-4">
        <div className="gap-1 md:gap-2 grid grid-cols-3">
          {imgList?.map((img, i) => (
            <img className="" src={img} alt="best deal" key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BestDeals;
