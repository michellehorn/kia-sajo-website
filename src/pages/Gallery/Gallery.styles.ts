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

interface GalleryVideoProps {
  imgurl: string;
}
export const GalleryVideo = styled.div<GalleryVideoProps>`
  background-image: url(${({ imgurl }) => imgurl});
  background-position: center;
  background-color: transparent;
  background-clip: content-box;
  height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  & > svg {
    background-color: #fff;
    border-radius: 100px;
    fill: #db0000;
    margin: auto 0;
    position: relative;
    height: 100px;
    opacity: 0.6;
    width: 100px;

    &:hover {
      opacity: 0.9;
      height: 110px;
      width: 110px;
      transition: ease-in 0.1s;
    }
  }
`;
