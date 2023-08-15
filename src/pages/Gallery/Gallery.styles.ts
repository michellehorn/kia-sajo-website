import styled from "styled-components";
import { Section } from "../../styles/shared";

export const SectionGallery = styled(Section)`
  padding: 1px;
`;

export const GalleryItem = styled.img`
  background-clip: content-box;
  background-position: bottom center;
  height: 330px;
  object-fit: contain;
  border-top: none;
  border-bottom: none;
`;

interface GalleryVideoProps {
  imgUrl: string;
}
export const GalleryVideo = styled.div<GalleryVideoProps>`
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 330px;
  width: 330px;
  transform: scale(1.46, 1.46);
  transform-origin: center left;

  & > svg {
    background-color: #fff;
    border-radius: 50%;
    fill: #fd3f35;
    margin: auto 0;
    position: relative;
    height: 80px;
    opacity: 0.7;
    width: 80px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
      transition: ease-in 0.1s;
      box-shadow: 1px 1px 3px #fd3f35;
    }
  }
`;
