import { AnimationImg, SectionTitle } from "../../styles/shared";
import { SectionAbout, SectionDescription, SectionInfo } from "./About.styles";
import { imgParallax2 } from "../../assets/images";
import { about } from "../../assets/json";
import { useEffect, useState } from "react";

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

  return (
    <SectionAbout id="sectionAbout">
      <SectionInfo>
        <SectionTitle fontSize="40px">A CANTORA</SectionTitle>
        <SectionDescription>{about}</SectionDescription>
      </SectionInfo>
        <AnimationImg
          src={imgParallax2}
          animationType= {animate ? "fromRight" : ""}
          height={550}
          delay={1}
          margin="0 0 -2px auto"
          padding="0 2em 0 0"
          style={{ position: "absolute", bottom: 0, right: "2em" }}
        />
    </SectionAbout>
  );
};
