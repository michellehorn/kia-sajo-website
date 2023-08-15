import styled from "styled-components";
import { Section } from "../../styles/shared";

export const SectionAbout = styled(Section)`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;
  box-shadow: 1px 1px 100px black;
`;

export const SectionDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: white;
  width: 700px;
`;

export const SectionInfo = styled.p`
  padding: 0 4em 3em;
`;
