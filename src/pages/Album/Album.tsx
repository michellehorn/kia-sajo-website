import { FirstSection, SectionAlbum } from "./Album.styles";
import { ondaMaxima, social } from "../../assets/json";
import {
  IconContainer,
  SectionDescription,
  SectionTitle,
} from "../../styles/shared";
import { isMobile } from "react-device-detect";
import { AmazonMusic, AppleMusic, Deezer, Spotify } from "../../assets/images";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Album = ({ id }: { id: string }) => {
  const getIcon = (name: string) =>
    ({
      youtube: <YouTubeIcon />,
      spotify: <Spotify />,
      amazon_music: <AmazonMusic />,
      apple_music: <AppleMusic />,
      deezer: <Deezer />,
    }[name]);

  const ListenToBox = () => (
    <IconContainer width="75px" height="60px">
      {social.map((s) => (
        <a title={s.title} target="_blank" href={s.link}>
          {getIcon(s.icon)}
        </a>
      ))}
    </IconContainer>
  );

  return (
    <SectionAlbum id={id}>
      <FirstSection>
        <SectionTitle fontcolor="#ffcba9" fontSize="40px">
          ONDA MÁXIMA
        </SectionTitle>
        <SectionDescription
          width="550px"
          fontcolor="#ffcba9"
          fontSize={isMobile ? "12px" : "16px"}
        >
          {ondaMaxima}
        </SectionDescription>
        {!isMobile && <ListenToBox />}
      </FirstSection>
      <FirstSection>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/6rdHgZSX735bZVNEWePRuh?utm_source=generator"
          width="100%"
          height="420px"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </FirstSection>
      {isMobile && <ListenToBox />}
    </SectionAlbum>
  );
};
