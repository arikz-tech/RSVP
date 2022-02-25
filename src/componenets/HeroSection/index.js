import React, { useState, useEffect } from "react";
import mobile from "../../videos/mobile.mp4";
import desktop from "../../videos/desktop.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownward,
  ArrowDown,
} from "./HeroElements";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const { width } = useWindowDimensions();

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={width < 600 ? mobile : desktop}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to our wedding </HeroH1>
        <HeroP>הזמנה לחתונה אריק & ענבר {width}</HeroP>
        <HeroBtnWrapper>
          <Button
            to="confirm"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            offset={-80}
          >
            אישור הגעה{hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
