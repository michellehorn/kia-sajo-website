import styled from "styled-components";
import { Section } from "../../styles/shared";

export const SectionGallery = styled(Section)`
  padding: 1px;
`;

export const GalleryItem = styled.img`
  background-clip: content-box;
  background-position: bottom center;
  height: 400px;
  object-fit: contain;
  border: 10px solid rgba(255, 255, 255, 0.2);
  border-top: none;
  border-bottom: none;
`;
