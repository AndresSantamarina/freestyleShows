import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/imagen1.jpg";
import img2 from "../assets/imagen2.jpg";
import img3 from "../assets/redBull.jpg";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="d-flex justify-content-center m-5">
    <Carousel activeIndex={index} onSelect={handleSelect} className=" carousel">
      <Carousel.Item>
        <img src={img1} alt="freestyle" className="imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="freestyle" className="imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Red Bull" className="imgCarousel" />
      </Carousel.Item>
    </Carousel>
    </div>

  );
};

export default CarouselComponent;
