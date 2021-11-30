import React from "react";
import { GallerySectionContainer } from "./GalleryElements";
import ImagesSlider from "./ImagesSlider";

const GallerySection = () => {
  return (
    <GallerySectionContainer id="gallery">
      <ImagesSlider />
    </GallerySectionContainer>
  );
};

export default GallerySection;
