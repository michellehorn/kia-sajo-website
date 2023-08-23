import {
  AnimationImg,
  SectionDescription,
  SectionTitle,
} from "../../styles/shared";
import { SectionAbout, SectionInfo } from "./About.styles";
import { imageSide, imageSideMobile } from "../../assets/images";
import { about } from "../../assets/json";
import { isMobile } from "react-device-detect";

export const About = ({ id }: { id: string }) => {
  return (
    <SectionAbout id={id}>
      <SectionInfo>
        <SectionTitle fontSize="40px" fontcolor="#ffcba9">
          A ARTISTA
        </SectionTitle>
        <SectionDescription
          fontcolor="#ffcba9"
          fontSize={isMobile ? "12px" : "16px"}
        >
          {about}
        </SectionDescription>
      </SectionInfo>
      <AnimationImg
        src={isMobile ? imageSideMobile : imageSide}
        height={isMobile ? 450 : 550}
        animationType={isMobile ? undefined : "fromLeft"}
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
