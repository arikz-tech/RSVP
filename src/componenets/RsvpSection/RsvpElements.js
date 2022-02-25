import styled from "styled-components";
import colors from "../colors";
import { Link as LinkR } from "react-router-dom";
import hebFont from "../font3.ttf";

export const SectionContainer = styled.div`
  display: flex;
  background: ${colors.background};
  align-items: center;
  justify-content: center;
  direction: rtl;
  flex-flow: column;
  height: 400px;
  z-index: 1;
`;

export const H1 = styled.h1`
  margin: 10px;
  color: ${colors.primary};
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
  margin: 10px;
  color: ${colors.primary};
  font-family: hebfont;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 3px solid #555;
    border-color: ${colors.accent};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const LabelContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 5px;
  font-size: medium;
  align-items: center;
  justify-content: center;
  display: block;
  font-family: hebfont;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const QuantityButton = styled.button`
  margin: 2px;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  padding: 3px;
  border: 2px solid #ccc;
  background: ${(props) => (props.clicked ? colors.accent : "white")};

  &:hover {
    background: ${colors.accent};
  }
`;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${colors.accent};
  color: #000000;
  padding: 12px 30px;
  margin-top: 25px;
  font-size: 20px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  direction: rtl;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.secondary};
  }

  font-family: hebfont;
  font-weight: bold;
  @font-face {
    font-family: hebfont;
    src: url(${hebFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
