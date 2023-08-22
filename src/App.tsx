import { Button, Link, SwipeableDrawer } from "@mui/material";
import * as firebase from "firebase/app";
import { About, Album, Contact, Gallery, Homepage } from "./pages";
import GlobalStyle from "./styles/globalStyle";
import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconContainer,
  MenuBox,
  MenuContainer,
  MenuImgContainer,
  Parallax,
} from "./styles/shared";
import { firebaseConfig } from "./firebase.config";
import {
  AmazonMusic,
  AppleMusic,
  Deezer,
  Spotfy,
  folder,
} from "./assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function App() {
  const items = ["home", "sobre-mim", "galeria", "ouca-agora", "contato"];
  const [state, toggleDrawer] = useState(false);

  firebase.initializeApp(firebaseConfig);

  return (
    <>
      <GlobalStyle />
      <Fragment>
        <MenuContainer>
          <Button onClick={() => toggleDrawer(true)}>
            <MenuIcon fontSize="large" color="inherit" />
          </Button>
        </MenuContainer>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <MenuBox>
            <MenuImgContainer>
              <img src={folder} />
            </MenuImgContainer>
            {items.map((item) => (
              <Link key={item} href={`#${item}`}>
                {item}
              </Link>
            ))}
            <IconContainer>
              <a
                title="Twitter"
                target="_blank"
                href="https://twitter.com/kiasajo"
              >
                <TwitterIcon />
              </a>
              <a
                title="Instagram"
                target="_blank"
                href="https://www.instagram.com/kiasajo/"
              >
                <InstagramIcon />
              </a>
              <a
                title="Youtube"
                target="_blank"
                href="https://www.youtube.com/@KiaSajo"
              >
                <YouTubeIcon />
              </a>
              <a
                title="Spotfy"
                target="_blank"
                href="https://open.spotify.com/intl-pt/artist/0WDFeDuCl5BcNrRZWO0pkS"
              >
                <Spotfy />
              </a>
              <a
                title="Amazon Music"
                target="_blank"
                href="https://www.amazon.com/music/player/artists/B077XFBBWS/kia-sajo"
              >
                <AmazonMusic />
              </a>
              <a
                title="Apple Music"
                target="_blank"
                href="https://music.apple.com/br/artist/kia-sajo/1315490604"
              >
                <AppleMusic />
              </a>
              <a
                title="Deezer"
                target="_blank"
                href="https://deezer.page.link/h72o4yiBtxdEfejN7"
              >
                <Deezer />
              </a>
            </IconContainer>
          </MenuBox>
        </SwipeableDrawer>
      </Fragment>
      <Parallax />
      <Homepage id="home" />
      <About id="sobre-mim" />
      <Gallery id="galeria" />
      <Album id="ouca-agora" />
      <Contact id="contato" />
    </>
  );
}

export default App;
