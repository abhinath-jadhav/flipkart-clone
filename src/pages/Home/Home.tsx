import { useEffect, useState } from "react";
import { BestDeals, BestProduct, HeroSlider } from "../../components";
import { getBestDeals } from "../../utils/api.util";

const Home = () => {
  const [bestDeals, setBestDeals] = useState<string[][]>([]);

  useEffect(() => {
    setBestDeals(getBestDeals());
  }, [setBestDeals]);

  return (
    <>
      <div>
        <HeroSlider />
        <BestProduct cat="mobile" />
        <BestDeals imgList={bestDeals[0]} />
        <BestProduct cat="mobile" />
        <BestDeals imgList={bestDeals[1]} />
        <BestProduct cat="mobile" />
        <BestDeals imgList={bestDeals[2]} />
      </div>
    </>
  );
};

export default Home;
