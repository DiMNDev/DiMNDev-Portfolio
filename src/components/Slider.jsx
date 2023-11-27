import React from "react";
import Image from "next/image";

const Slider = (data) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const changeSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(changeSlide);
  }),
    [currentSlide];
  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          width: `calc(${data.length * 100})`,
        }}
      >
        <Image className="blur blur0" src={data[0]} alt="img1" />
      </div>
    </div>
  );
};

export default Slider;
