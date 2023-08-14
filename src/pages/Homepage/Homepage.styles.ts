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
  justify-content: center;
  height: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ImgTestSlide = styled.img<ImgTestProps>`
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-name: ${({ animationType }) => handleAnimation(animationType)};
  animation-timing-function: ease-in-out;
  height: 100%;
  margin: ${({ margin }) => margin || "0px"};
`;
