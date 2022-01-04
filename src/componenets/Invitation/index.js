import React from "react";
import { InvitationSectionContainer, Image, H1 } from "./InvitationElements";

import image from "../../images/invitation.jpeg";

const InvitationSection = () => {
  return (
    <InvitationSectionContainer id="invitation">
      <H1>הזמנה</H1>
      <Image src={image} />
    </InvitationSectionContainer>
  );
};

export default InvitationSection;
