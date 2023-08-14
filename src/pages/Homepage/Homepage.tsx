import { collabImg1, collabImg2, collabImg3 } from "../../assets/images";
import { HomeSection, ImgContainer, ImgTestSlide } from "./Homepage.styles";

export const Homepage = () => {
  return (
    <HomeSection>
      <ImgContainer>
        <ImgTestSlide
          animationType="fromLeft"
          src={collabImg1}
          height={380}
          margin="0 -25px 0 0"
        />
        <ImgTestSlide animationType="fadeIn" src={collabImg2} height={500} />
        <ImgTestSlide
          animationType="fromRight"
          src={collabImg3}
          height={480}
          margin="0 0 0 -50px"
        />
      </ImgContainer>
    </HomeSection>
  );
};
