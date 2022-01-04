import styled, { css, keyframes } from "styled-components";
import colors from "../colors";

import hebFont from "../font3.ttf";

export const GallerySectionContainer = styled.div`
  background: ${colors.background};
  height: 800px;
  direction: rtl;
`;

export const SliderContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: hebfont;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  margin-bottom: 10px;
`;

export const H1 = styled.h1`
  color: ${colors.primary};
`;

const leftToRight = keyframes`
0%{
opacity: 0;
transform: translateX(-50px);
}
100%{
opacity: 1;
transform: translateX(0px);
}
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  grid-gap: 1em;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardWrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  ${(props) => {
    if (props.visible) {
      return css`
        display: block;
      `;
    }
    return css`
      display: none;
    `;
  }};
  ${(props) => {
    if (props.visible) {
      return css`
        animation: ${leftToRight} 2s;
      `;
    }
    return css``;
  }};
`;

export const ImgWrap = styled.div``;

export const Img = styled.img`
  width: 400px;
  height: 350px;
`;
