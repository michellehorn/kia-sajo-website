import styled from "styled-components";
import { Section } from "../../styles/shared";
import { ondaMaxima } from "../../assets";

export const SectionAlbum = styled(Section)`
  display: flex;
  flex-direction: row;
  padding: 5em;
  padding-top: 7em;
  background: url(${ondaMaxima});
  background-repeat: no-repeat;
  background-size: cover;
  height: 75vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 2em;
    height: fit-content;
  }
`;

export const FirstSection = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
