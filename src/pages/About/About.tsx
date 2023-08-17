import { AnimationImg, SectionTitle } from "../../styles/shared";
import { SectionAbout, SectionDescription, SectionInfo } from "./About.styles";
import { imageSide, imageSideMobile } from "../../assets/images";
import { about } from "../../assets/json";
import { useEffect, useState } from "react";
import { isMobile, isMobileOnly } from "react-device-detect";

export const About = ({ id }: { id: string }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    //TODO: Refatorar e construir hook
    const handleScroll = () => {
      const sectionAbout = document.getElementById("sobre-mim");
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
    if (isMobileOnly) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getAnimationType = () => {
    if (isMobile) return undefined;
    if (animate) return "fromLeft";
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
