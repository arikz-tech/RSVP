import styled from "styled-components";
import colors from "../colors";
import hebFont from "../font3.ttf";

export const InvitationSectionContainer = styled.div`
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
  text-decoration: underline;
  font-size: 40px;
  font-family: hebfont;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Image = styled.img`
  border: 5px solid #fff;
  border-radius: 20px;
  width: 330px;
  height: 800px;
`;
