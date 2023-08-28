import { isMobile } from "react-device-detect";
import { photo3 } from "../../assets/images";
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

export const Contact = ({ id }: { id: string }) => {
  return (
    <ContactSection id={id}>
      <ContactContainer>
        <SectionTitle fontSize="40px" fontcolor="#ffcba9">
          CONTATO
        </SectionTitle>
        <div>
          <SectionDescription
            fontSize="28px"
            textalign="center"
            width="auto"
            fontweight={600}
            fontcolor="#ffcba9"
          >
            Shows
          </SectionDescription>
          <SectionDescription
            fontSize={isMobile ? "18px" : "24px"}
            fontcolor="#ffcba9"
            textalign="center"
            width="auto"
          >
            <ContactLink
              href="https://www.instagram.com/agencialubi/"
              target="_blank"
            >
              @Laura Lubi
            </ContactLink>
            {""} - {""}
            <ContactLink href="tel:5548988418142" target="_blank">
              (48) 98841-8142
            </ContactLink>{" "}
          </SectionDescription>
          <SectionDescription
            fontSize="28px"
            fontcolor="#ffcba9"
            fontweight={600}
            textalign="center"
            width="auto"
          >
            Publicidade
          </SectionDescription>
          <SectionDescription
            fontSize={isMobile ? "18px" : "24px"}
            textalign="center"
            width="auto"
          >
            <ContactLink
              href="https://www.instagram.com/releasemusic_/"
              target="_blank"
            >
              @Diego Lemos
            </ContactLink>
            {""} - {""}
            <ContactLink href="tel:5521987980040" target="_blank">
              (21) 98798-0040
            </ContactLink>
          </SectionDescription>
        </div>
        <IconContainer>
          <a aria-label="Twitter" target="_blank" href="https://twitter.com/kiasajo">
            <TwitterIcon />
          </a>
          <a
            aria-label="Instagram"
            target="_blank"
            href="https://www.instagram.com/kiasajo/"
          >
            <InstagramIcon />
          </a>
          <a
            aria-label="E-mail"
            target="_blank"
            href="mailto:kiasajo@outlook.com?subject=Contato Kia Sajo"
          >
            <MailIcon />
          </a>
          <a
            aria-label="Youtube"
            target="_blank"
            href="https://www.youtube.com/@KiaSajo"
          >
            <YouTubeIcon />
          </a>
        </IconContainer>
      </ContactContainer>
      {!isMobile && (
        <AnimationImg
          alt="Foto decorativa de Kia Sajo"
          style={{
            opacity: isMobile ? 0.2 : 0,
            position: isMobile ? "absolute" : "relative",
            bottom: isMobile ? 0 : "inherit",
          }}
          height={isMobile ? "490px" : "610px"}
          src={photo3}
          animationType={isMobile ? undefined : "fromLeft"}
        />
      )}
    </ContactSection>
  );
};
