import React, { useState } from "react";
import mobileVideo from "../../videos/mobile.mp4";
import desktopVideo from "../../videos/desktop.mp4";
import thumb from "../../images/1.jpeg";
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
  Image,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const getVideoSrc = (width) => {
    if (width >= 1080) return desktopVideo;

    return mobileVideo;
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={getVideoSrc(window.innerWidth)}
          type="video/mp4"
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        />
      </HeroBg>
      <HeroBg>
        <Image
          src={thumb}
          style={{
            opacity: isVideoLoaded ? 0 : 1,
          }}
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to our wedding </HeroH1>
        <HeroP>הזמנה לחתונה אריק & ענבר</HeroP>
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
