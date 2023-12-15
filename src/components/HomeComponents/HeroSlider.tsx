import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { useCallback, useEffect, useState } from "react";
import { getSlidetImgs } from "../../utils/api.util";
import { Container } from "..";

const HeroSlider = () => {
  const [slideImages, setSlideImages] = useState<string[]>([]);

  const [currSlide, setCurrSlide] = useState<number>(0);

  const next = useCallback(() => {
    if (currSlide === slideImages.length - 1) {
      setCurrSlide(0);
    } else {
      setCurrSlide((curr) => curr + 1);
    }
  }, [currSlide, slideImages]);

  const prev = () => {
    if (currSlide === 0) {
      setCurrSlide(slideImages.length - 1);
    } else {
      setCurrSlide((curr) => curr - 1);
    }
  };
  useEffect(() => {
    // Automatically advance the current slide
    const intervalId = setInterval(next, 2000);
    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [next]);

  useEffect(() => {
    const slideImages = async () => {
      try {
        const imagesdata = await getSlidetImgs();
        setSlideImages(imagesdata);
      } catch (error) {}
    };

    slideImages();
  }, []);
  return (
    <Container>
      <div className="relative group overflow-hidden ">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currSlide * 100}%)` }}
        >
          {slideImages.map((img, i) => (
            <img key={i} src={img} alt={`slide-${i}`} />
          ))}
        </div>

        <div
          className="absolute hidden group-hover:block top-[42%] left-0 bg-slate-50 rounded-full p-2 ml-1 cursor-pointer"
          onClick={prev}
        >
          <GrLinkPrevious size={20} />
        </div>
        <div
          className="absolute hidden group-hover:block top-[42%] right-0 bg-slate-50 rounded-full p-2 mr-1 cursor-pointer"
          onClick={next}
        >
          <GrLinkNext size={20} />
        </div>
      </div>
    </Container>
  );
};

export default HeroSlider;
