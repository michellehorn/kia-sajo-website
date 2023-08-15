import { AnimationImg, SectionTitle } from "../../styles/shared";
import { SectionAbout, SectionDescription, SectionInfo } from "./About.styles";
import { imgParallax2 } from "../../assets/images";
import { about } from "../../assets/json";

export const About = () => {
  return (
    <SectionAbout>
      <SectionInfo>
        <SectionTitle fontSize="40px">A CANTORA</SectionTitle>
        <SectionDescription>{about}</SectionDescription>
      </SectionInfo>
      <AnimationImg
        src={imgParallax2}
        animationType="fromRight"
        height={550}
        delay={1}
        margin="0 0 -2px auto"
        padding="0 2em 0 0"
        style={{ position: "absolute", bottom: 0, right: "2em" }}
      />
    </SectionAbout>
  );
};
