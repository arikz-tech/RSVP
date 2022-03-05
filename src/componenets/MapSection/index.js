import React from "react";
import { MapSectionContainer, H1, H2, H3 } from "./MapElements";
import wazeImage from "../../images/waze.png";

const MapSection = () => {
  return (
    <MapSectionContainer id="map">
      <H1>ניווט לאולם</H1>
      <H2>הסעות:</H2>
      <H3>קרית גת - רחבת השוק בשעה 18:45</H3>
      <H3>כרמיאל - רחבת העירייה בשעה 18:30</H3>
      <a href="https://waze.com/ul?ll=32.11315664%2C34.90421891&navigate=yes">
        <img src={wazeImage} width={100} height={100} alt="waze navigation" />
      </a>
      <H3>מפה:</H3>
      <iframe
        title="58"
        width="90%"
        height="350"
        style={{ border: 0, padding: 10 }}
        loading="lazy"
        allowfullscreen
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=58%20%D7%90%D7%95%D7%9C%D7%9D+(%D7%97%D7%AA%D7%95%D7%A0%D7%94%20%D7%A2%D7%A0%D7%91%D7%A8%20%D7%95%D7%90%D7%A8%D7%99%D7%A7)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&key=AIzaSyAOmR9jKU0LnUdhyHkF-W9C6XMnnt2P89c"
      ></iframe>
    </MapSectionContainer>
  );
};
export default MapSection;
