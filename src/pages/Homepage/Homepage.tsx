import { collabImg1, collabImg2, collabImg3 } from "../../assets/images";
import { HomeSection, ImgContainer, ImgTestSlide } from "./Homepage.styles";

export const Homepage = () => {
  return (
    <HomeSection>
      <ImgContainer>
        <ImgTestSlide animationType="fromLeft" src={collabImg1} />
        <ImgTestSlide animationType="fadeIn" src={collabImg2} />
        <ImgTestSlide animationType="fromRight" src={collabImg3} />
      </ImgContainer>
    </HomeSection>
  );
};
