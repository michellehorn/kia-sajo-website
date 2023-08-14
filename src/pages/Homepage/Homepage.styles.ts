import styled, { keyframes } from "styled-components";
import { background } from "../../assets";

interface AnimationImgProps {
  animationtype: string;
  index?: number;
  margin?: string;
  delay?: number;
  duration?: number;
}

const handleAnimation = (animation: string) => {
  if (animation === "fromLeft") {
    return slideFromLeft;
  } else if (animation === "fromRight") {
    return slideFromRight;
  } else if (animation === "fadeIn") {
    return fadeIn;
  } else {
    return null;
  }
};

const fadeInTitle = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;

    }
  `;

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const slideFromRight = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromLeft = keyframes`
  from {
    transform: translateX(70%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HomeSection = styled.section`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 1em;
  margin-top: auto;
`;

export const AnimationImg = styled.img<AnimationImgProps>`
  animation-duration: ${({ duration }) => duration || 2}s;
  animation-fill-mode: forwards;
  animation-name: ${({ animationtype }) => handleAnimation(animationtype)};
  animation-timing-function: ease-in-out;
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || "0px"};
  z-index: ${({ index }) => index || 0};
  animation-delay: ${({ delay }) => delay || 0}s;
  opacity: 0;
`;

export const Title = styled.h1`
  @import url("https://use.typekit.net/pgm4uqx.css");
  font-family: "beastly", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 140px;
  opacity: 0.8;
  background: linear-gradient(90deg, #620000, transparent),
    linear-gradient(90deg, transparent, #aa0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 1px #fd0000);
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${fadeInTitle};
  animation-timing-function: ease-in-out;
`;
