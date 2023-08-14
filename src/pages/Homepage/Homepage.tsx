import { collabImg1, collabImg2, collabImg3 } from "../../assets/images";
import {
  HomeSection,
  ImgContainer,
  AnimationImg,
  Title,
} from "./Homepage.styles";

export const Homepage = () => {
  return (
    <HomeSection>
      <Title>KIA SAJO</Title>
      <ImgContainer>
        <AnimationImg
          animationType="fromLeft"
          src={collabImg1}
          height={380}
          delay={1}
          margin="0 -25px 0 0"
        />
        <AnimationImg animationType="fadeIn" src={collabImg2} height={500} index={20} />
        <AnimationImg
          animationType="fromRight"
          src={collabImg3}
          delay={1}
          duration={1}
          height={480}
          margin="0 0 0 -50px"
        />
      </ImgContainer>
    </HomeSection>
  );
};
