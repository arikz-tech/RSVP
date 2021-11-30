import styled from "styled-components";
import { Link } from "react-scroll";
import colors from "./colors";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${colors.primary};
  white-space: nowrap;
  margin-top: 10px;
  padding: 12px 25px;
  color: ${colors.secondary};
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.accent};
    color: ${colors.primary};
  }
`;
