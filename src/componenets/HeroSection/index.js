import React, { useState } from "react";
import Video from "../../videos/video.mp4";
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
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>ברוכים הבאים</HeroH1>
        <HeroP>הזמנה לחתונה של אריק וענבר</HeroP>
        <HeroBtnWrapper>
          <Button
            to="confirm"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            offset={-80}
          >
            <h4>לאישור הגעה {hover ? <ArrowDownward /> : <ArrowDown />}</h4>
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
//{hover ? <ArrowDownward /> : <ArrowDown />}
export default HeroSection;
