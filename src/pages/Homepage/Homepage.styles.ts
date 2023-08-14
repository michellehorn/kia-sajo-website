import styled, { keyframes } from "styled-components";
import { background } from "../../assets";

interface ImgTestProps {
  animationType: string;
  margin?: string;
}

const handleAnimation = (animation: string) => {
  if (animation === "fromLeft") {
    return slideFromLeft;
  } else if (animation === "fromRight") {
    return slideFromRight;
  } else if (animation === "fadeIn") {
    return fadeIn;
  } else {
    return null; // Caso a string não corresponda a nenhuma animação
  }
};

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
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const HomeSection = styled.section`
  background-image: url(${background});
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 400px;
  margin-right: 1em;
  margin-top: auto;
`;

export const ImgTestSlide = styled.img<ImgTestProps>`
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${({ animationType }) => handleAnimation(animationType)};
  animation-timing-function: ease-in-out;
  height: ${({ height }) => height || "100%"};
  margin: ${({ margin }) => margin || "0px"};
`;

export const Title = styled.h1`
  @import url("https://use.typekit.net/pgm4uqx.css");
  font-family: "beastly", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 140px;
  opacity: 0.8;
  background: linear-gradient(90deg, #aa0000, transparent),
    linear-gradient(90deg, transparent, #aa0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 1px #fd0000);
`;
