import { AnimationImg, SectionTitle } from "../../styles/shared";
import { SectionAbout, SectionDescription, SectionInfo } from "./About.styles";
import { imageSide, imageSideMobile } from "../../assets/images";
import { about } from "../../assets/json";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    //TODO: Refatorar e construir hook
    const handleScroll = () => {
      const sectionAbout = document.getElementById("sectionAbout");
      if (sectionAbout) {
        const offsetTop = sectionAbout.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        if (scrollY > offsetTop - windowHeight) {
          setAnimate(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getAnimationType = () => {
    if (isMobile) return undefined;
    if (animate) return "fromLeft";
  };

  return (
    <SectionAbout id="sectionAbout">
      <SectionInfo>
        <SectionTitle fontSize="40px">A CANTORA</SectionTitle>
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
          opacity: isMobile ? 0.3 : 0,
        }}
        indexSmall="0"
      />
    </SectionAbout>
  );
};
