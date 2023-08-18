import styled from "styled-components";
import { Section } from "../../styles/shared";

export const SectionAbout = styled(Section)`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;
  height: 75vh;
  box-shadow: 1px 1px 100px black;
  @media screen and (max-width: 600px) {
    padding: 2em 0;
  }
`;

export const SectionInfo = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3em; 
  @media screen and (max-width: 600px) {
    padding: 2em;
    margin-top: -1.5em;
  }
`;
