import styled, { keyframes } from "styled-components";
import { background, backgroundDark } from "../assets";
import { StyleProps } from "../types";

// animation

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

export const slideFromRight = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideFromLeft = keyframes`
  from {
    transform: translateX(70%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const handleAnimation = (animation: string) =>
  ({
    fromLeft: slideFromLeft,
    fromRight: slideFromRight,
    fadeIn: fadeIn,
  }[animation]);

export const AnimationImg = styled.img<StyleProps>`
  animation-duration: ${({ duration }) => duration || 2}s;
  animation-fill-mode: forwards;
  animation-name: ${({ animationType }) =>
    animationType ? handleAnimation(animationType) : ""};
  animation-timing-function: ease-in-out;
  height: ${({ height }) => height || "100%"};
  padding: ${({ padding }) => padding || "0px"};
  margin: ${({ margin }) => margin || "0px"};
  z-index: ${({ index }) => index || 0};
  animation-delay: ${({ delay }) => delay || 0}s;
  opacity: 0;
  position: relative;
  filter: drop-shadow(5px -3px 2px #8c261d) drop-shadow(3px 0px 2px #680000)
    drop-shadow(3px 3px 5px #8c261d);
  @media screen and (max-width: 600px) {
    z-index: ${({ indexSmall }) => indexSmall || 0};
  }
`;

// others

export const Parallax = styled.div`
  background-image: url(${background});
  height: 405vh;
  width: 100%;
  position: absolute;
  z-index: -2;
`;

export const Section = styled.section`
  max-width: 100%;
  padding: 2em 2em 0 2em;
  height: 98vh;
  @media screen and (max-width: 600px) {
    padding: 1em 1em 0;
  }
`;

export const Title = styled.h1<StyleProps>`
  font-family: "beastly", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: ${({ fontSize }) => fontSize || "140px"};
  opacity: 0.8;
  background: linear-gradient(90deg, #ffcba9, transparent),
    linear-gradient(90deg, transparent, #ffcba9);
  /* background: linear-gradient(90deg, #FFCBA9, transparent),
    linear-gradient(90deg, transparent, #FFCBA9); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 1px #ffcba9);
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${fadeIn};
  animation-timing-function: ease-in-out;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 600px) {
    position: absolute;
    z-index: 10;
    font-size: 120px;
    line-height: 100px;
    bottom: 25%;
  }
`;

export const SectionTitle = styled.h2<StyleProps>`
  font-family: "beastly", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: ${({ fontSize }) => fontSize || 10};
  opacity: 0.8;
  color: ${({ fontcolor }) => fontcolor || "#aa0000"};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${fadeIn};
  animation-timing-function: ease-in-out;
  width: fit-content;
  padding: ${({ padding }) => padding};
  z-index: 10;
  position: relative;
`;

export const SectionDescription = styled.p<StyleProps>`
  font-family: "Poppins", sans-serif;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontweight }) => fontweight || 400};
  color: ${({ fontcolor }) => fontcolor || "#fff"};
  position: relative;
  text-align: ${({ textalign }) => textalign || "left"};
  width: ${({ width }) => width || "650px"};
  z-index: 10;
  @media screen and (max-width: 600px) {
    width: 100%;
    text-shadow: 1px 1px gray;
  }
`;

export const MenuContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 20px;
  left: 20px;
  svg {
    fill: white !important;
  }
  @media screen and (max-width: 600px) {
    top: 10px;
    left: 10px;
    z-index: 1000;
  }
`;

export const MenuBox = styled.nav`
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  line-height: 30px;
  padding: 1em;
  font-size: 20px;
  height: 100%;
  background-color: #ff0101d9;
  background: linear-gradient(
    200deg,
    rgba(10, 10, 10, 0.9),
    rgb(0, 0, 0),
    rgba(10, 10, 10, 0.9)
  );
  background-image: url(${backgroundDark});

  & > a {
    font-size: 24px;
    font-weight: 600;
    color: #ffcba9;
    text-decoration: none;
    &:hover {
      transform: scale(1.1);
      transition: ease-in-out 0.1s;
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 600px) {
    width: 220px;
  }
`;

export const MenuImgContainer = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  background-color: #fdc0a0;
  margin: 30px 0;
  border-radius: 50%;
  z-index: 20;
  overflow: hidden;

  & > img {
    height: 170px;
    transform: scaleX(-1);
  }
`;

export const IconContainer = styled.div<StyleProps>`
  display: ${({ display }) => display || "flex"};
  flex-wrap: wrap;
  z-index: 20;
  width: 100%;
  justify-content: ${({ display }) =>
    display === "flex" ? "center" : "inherit"};
  bottom: 0;
  position: ${({ display }) => (display === "flex" ? "absolute" : "relative")};
  margin-bottom: 10px;
  margin-top: 2em;

  & > a > svg {
    fill: #ffcba9;
    height: ${({ height }) => height || "32px"};
    opacity: 0.8;
    width: ${({ width }) => width || "50px"};
    transition: ease 0.5s;

    &:hover {
      scale: 1.2;
      opacity: 1;
    }

    @media screen and (max-width: 600px) {
      height:  ${({ display }) => (display !== "flex" ? "42px" : "32px")};
      width: ${({ display }) => (display !== "flex" ? "55px" : "60px")};
    }
  }

  @media screen and (max-width: 600px) {
      display: flex;
      justify-content: center;
    }
`;
