import { isMobile } from "react-device-detect";
import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 600px) {
    align-items: start;
    justify-content: center;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 7em;

  @media screen and (max-width: 600px) {
    padding: 2em;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 60px 0 46px;
  z-index: 20;

  & > a > svg {
    fill: #ffcba9;
    height: 50px;
    opacity: 0.8;
    width: 50px;
    transition: ease 0.5s;
    filter: drop-shadow(1px 1px 1px #ff5959) drop-shadow(1px 0px 1px #ff5959);

    &:hover {
      scale: 1.2;
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const ContactLink = styled.a`
  color: #ffcba9;
  text-decoration: none;
  font-weight: 500;

  &:first-of-type {
    font-weight: 900;
  }
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 600px) {
    color: ${isMobile ? "#ffcba9" : "#ff3c3c"};
    text-shadow: none;
    font-weight: 500;
    font-size: 70%;
  }
`;

export const FooterMessage = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  padding-bottom: 12px;
  a {
    color: #ffcba9;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;
