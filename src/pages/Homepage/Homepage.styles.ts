import styled from "styled-components";

export const HomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin-left: 7em;

  @media screen and (max-width: 600px) {
    margin-left: 1em;
    iframe {
      position: absolute;
      bottom: 0;
      width: 90%;
      height: 100px;
      opacity: 1;
      /* div[data-testid="main-page"] {
        
      } */
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 1em;
  margin-top: auto;
  @media screen and (max-width: 600px) {
    position: absolute;
    bottom: 2px;
    opacity: 0.4;
    z-index: 0;
    img {
      &:nth-of-type(1) {
        display: none;
      }
      &:nth-of-type(2) {
        height: 550px;
        margin-left: 80px;
      }
      &:nth-of-type(3) {
        display: none;
      }
    }
  }
`;
