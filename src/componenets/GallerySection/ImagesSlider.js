import React, { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import CardImage from "./CardImage";

import { SliderContainer, TitleContainer, H1 } from "./GalleryElements";

import img1 from "../../images/1.jpeg";
import img2 from "../../images/2.jpeg";
import img3 from "../../images/3.jpeg";
import img4 from "../../images/4.jpeg";
import img5 from "../../images/5.jpeg";
import img6 from "../../images/6.jpeg";
import img7 from "../../images/7.jpeg";
import img8 from "../../images/8.jpeg";
import img9 from "../../images/9.jpeg";
import img10 from "../../images/10.jpeg";
import img11 from "../../images/11.jpeg";
import img12 from "../../images/12.jpeg";

const ImagesSlider = () => {
  const useWindowWidth = () => {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return width;
  };
  const width = useWindowWidth();
  const settingsSlider1 = {
    dots: false,
    infinite: true,
    slidesToShow: width <= 768 ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };

  const settingsSlider2 = {
    dots: false,
    infinite: true,
    slidesToShow: width <= 768 ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <SliderContainer>
      <TitleContainer>
        <H1>גלריה</H1>
      </TitleContainer>
      <Slider {...settingsSlider1}>
        <div>
          <CardImage src={img1} />
        </div>
        <div>
          <CardImage src={img2} />
        </div>
        <div>
          <CardImage src={img3} />
        </div>
        <div>
          <CardImage src={img4} />
        </div>
        <div>
          <CardImage src={img5} />
        </div>
        <div>
          <CardImage src={img6} />
        </div>
      </Slider>
      <Slider {...settingsSlider2}>
        <div>
          <CardImage src={img7} />
        </div>
        <div>
          <CardImage src={img8} />
        </div>
        <div>
          <CardImage src={img9} />
        </div>
        <div>
          <CardImage src={img10} />
        </div>
        <div>
          <CardImage src={img11} />
        </div>
        <div>
          <CardImage src={img12} />
        </div>
      </Slider>
    </SliderContainer>
  );
};

export default ImagesSlider;
