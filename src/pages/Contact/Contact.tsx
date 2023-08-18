import { isMobile } from "react-device-detect";
import { photo2 } from "../../assets/images";
import {
  AnimationImg,
  SectionDescription,
  SectionTitle,
} from "../../styles/shared";
import {
  ContactContainer,
  ContactLink,
  ContactSection,
  IconContainer,
} from "./Contact.styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useScrollAnimation from "../../utils/handleScrollAnimation";

export const Contact = () => {
  const shouldAnimate = useScrollAnimation("sectionAbout");

  const getAnimationType = () => {
    if (isMobile) return undefined;
    if (shouldAnimate) return "fadeIn";
  };

  return (
    <ContactSection>
      <ContactContainer>
        <SectionTitle fontSize="40px" fontcolor="#AA0000">
          CONTATO
        </SectionTitle>
        <div>
          <SectionDescription
            fontcolor="#ff3c3c"
            fontSize="24px"
            textalign="center"
            width="auto"
            fontweight={600}
          >
            Shows
          </SectionDescription>
          <SectionDescription
            fontcolor="#ff5f5f"
            fontSize="18px"
            textalign="center"
            width="auto"
          >
            <ContactLink href="tel:5548988418142" target="_blank">
              (48) 98841-8142
            </ContactLink>{" "}
            - Laura Lubi -{" "}
            <ContactLink
              href="https://www.instagram.com/agencialubi/"
              target="_blank"
            >
              @agencialubi{" "}
            </ContactLink>
          </SectionDescription>
          <SectionDescription
            fontcolor="#ff3c3c"
            fontSize="24px"
            fontweight={600}
            textalign="center"
            width="auto"
          >
            Publicidade
          </SectionDescription>
          <SectionDescription
            fontcolor="#ff5f5f"
            fontSize="18px"
            textalign="center"
            width="auto"
          >
            <ContactLink href="tel:5521987980040" target="_blank">
              (21) 98798-0040
            </ContactLink>{" "}
            - Diego Lemos -{" "}
            <ContactLink
              href="https://www.instagram.com/releasemusic_/"
              target="_blank"
            >
              @releasemusic_
            </ContactLink>
          </SectionDescription>
        </div>
        <IconContainer>
          <a href="https://twitter.com/kiasajo">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/kiasajo/">
            <InstagramIcon />
          </a>
          <a href="mailto:kiasajo@outlook.com?subject=Contato Kia Sajo">
            <MailIcon />
          </a>
          <a href="https://www.youtube.com/@KiaSajo">
            <YouTubeIcon />
          </a>
        </IconContainer>
      </ContactContainer>
      <AnimationImg
        style={{
          opacity: isMobile ? 0.3 : 0,
        }}
        height={isMobile ? 450 : 550}
        src={photo2}
        animationType={getAnimationType()}
      />
    </ContactSection>
  );
};
