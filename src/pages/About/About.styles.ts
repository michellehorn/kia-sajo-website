import styled from "styled-components";
import { Section } from "../../styles/shared";

export const SectionAbout = styled(Section)`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;
  box-shadow: 1px 1px 100px black;
  @media screen and (max-width:600px) {
    padding: 2em 0;
  }
`;

export const SectionDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: white;
  width: 650px;
  z-index: 10;
  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
    font-size: 12px;
    text-shadow: 1px 1px gray;
  }
`;

export const SectionInfo = styled.p`
  padding: 0 4em 3em;
  @media screen and (max-width:600px) {
    padding: 0 1em;
  }
`;
