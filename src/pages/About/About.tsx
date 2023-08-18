import {
  AnimationImg,
  SectionDescription,
  SectionTitle,
} from "../../styles/shared";
import { SectionAbout, SectionInfo } from "./About.styles";
import { imageSide, imageSideMobile } from "../../assets/images";
import { about } from "../../assets/json";
import { isMobile } from "react-device-detect";
import useScrollAnimation from "../../utils/handleScrollAnimation";

export const About = () => {
  const shouldAnimate = useScrollAnimation("sectionAbout");

  const getAnimationType = () => {
    if (isMobile) return undefined;
    if (shouldAnimate) return "fromLeft";
  };

  return (
    <SectionAbout id={id}>
      <SectionInfo>
        <SectionTitle fontSize="40px">A ARTISTA</SectionTitle>
        <SectionDescription>{about}</SectionDescription>
      </SectionInfo>
      <AnimationImg
        src={isMobile ? imageSideMobile : imageSide}
        height={isMobile ? 450 : 550}
        animationType={getAnimationType()}
        delay={1}
        margin="0 0 -2px auto"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          opacity: isMobile ? 0.4 : 0,
        }}
        indexSmall="0"
      />
    </SectionAbout>
  );
};
