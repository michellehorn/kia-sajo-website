import styled, { keyframes } from "styled-components";
import { background } from "../assets";
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
  height: 400vh;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Section = styled.section`
  max-width: 100%;
  padding: 2em 2em 0 2em;
  @media screen and (max-width: 600px) {
    padding: 1em 1em 0;
  }
`;

export const Title = styled.h1<StyleProps>`
  font-family: "beastly", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 140px;
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
  color: #aa0000;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${fadeIn};
  animation-timing-function: ease-in-out;
  width: fit-content;
  padding: ${({ padding }) => padding};
  z-index: 10;
  position: relative;
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
  width: 150px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  padding: 1em;
  font-size: 20px;
`;
