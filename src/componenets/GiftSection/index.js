import React from "react";
import { GiftSectionContainer, Image, H1 } from "./GiftSectionElements";

import image from "../../images/paybox.png";

const GiftSection = () => {
  return (
    <GiftSectionContainer id="gift">
      <H1>מתנה באשראי</H1>
      <a href="https://payboxapp.page.link/PM4SgoyNV95frJW66">
        <Image src={image} />
      </a>
    </GiftSectionContainer>
  );
};

export default GiftSection;
