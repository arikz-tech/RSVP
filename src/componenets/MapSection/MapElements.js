import styled from "styled-components";
import colors from "../colors";
import hebFont from "../font3.ttf";

export const MapSectionContainer = styled.div`
  background: ${colors.background};
  display: flex;
  flex-direction: column;

  direction: rtl;
  align-items: center;
  height: 800px;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const H1 = styled.h1`
  color: ${colors.primary};
  font-size: 40px;
  text-decoration: underline;
  font-family: hebfont;
  direction: rtl;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const H2 = styled.h2`
  color: ${colors.primary};
  margin-top: 15px;
  text-decoration: underline;
  direction: rtl;
  font-family: hebfont;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const H3 = styled.h3`
  color: ${colors.primary};
  margin-top: 15px;
  font-family: hebfont;
  direction: rtl;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const H4 = styled.h4`
  color: ${colors.primary};
  margin-top: 30px;
  font-family: hebfont;
  direction: rtl;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
