import styled from "styled-components";
import { Section } from "../../styles/shared";

export const SectionGallery = styled(Section)`
  padding: 1px;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const GalleryItem = styled.img`
  background-clip: content-box;
  background-position: bottom center;
  height: 330px;
  object-fit: contain;
  border-top: none;
  border-bottom: none;
  margin-bottom: -5px;
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
  box-shadow: 1px 1px 200px rgba(0, 0, 0, 0.9) inset;

  & > svg {
    background-color: red;
    border-radius: 20%;
    fill: #fff;
    margin: auto 0;
    position: relative;
    height: 20px;
    width: 30px;
    cursor: pointer;
    padding: 0.2em;

    &:hover {
      transform: scale(1.1);
      transition: ease-in 0.1s;
      box-shadow: 1px 1px 5px #888;
    }

    @media screen and (max-width: 600px) {
      margin: auto;
      position: absolute;
      left: 30%;
    }
  }
  @media screen and (max-width: 600px) {
    position: relative;
    width: 100%;
  }
`;
