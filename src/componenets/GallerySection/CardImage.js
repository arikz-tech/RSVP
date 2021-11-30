import React from "react";
import { CardWrapper, ImgWrap, Img } from "./GalleryElements";

const CardImage = (props) => {
  return (
    <CardWrapper visible={true}>
      <ImgWrap>
        <Img src={props.src} />
      </ImgWrap>
    </CardWrapper>
  );
};

export default CardImage;
