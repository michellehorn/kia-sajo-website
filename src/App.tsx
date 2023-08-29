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
  Spotify,
  folder,
} from "./assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { menuItems, social } from "./assets/json";

function App() {
  const [state, toggleDrawer] = useState(false);

  firebase.initializeApp(firebaseConfig);

  const getIcon = (name: string) =>
    ({
      twitter: <TwitterIcon />,
      instagram: <InstagramIcon />,
      youtube: <YouTubeIcon />,
      spotify: <Spotify />,
      amazon_music: <AmazonMusic />,
      apple_music: <AppleMusic />,
      deezer: <Deezer />,
    }[name]);

  const handleClick = (item: (typeof menuItems)[0]) => {
    window.location.href =`#${item.anchor}`;
    setTimeout(() => {
      toggleDrawer(false);
    }, 1000);
  };
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
          closeAfterTransition
        >
          <MenuBox>
            <MenuImgContainer>
              <img src={folder} />
            </MenuImgContainer>
            {menuItems.map((item) => (
              <Link key={item.anchor} onClick={() => handleClick(item)}>
                {item.title}
              </Link>
            ))}
            <IconContainer display="flex">
              {social.map((s) => (
                <a title={s.title} target="_blank" href={s.link}>
                  {getIcon(s.icon)}
                </a>
              ))}
            </IconContainer>
          </MenuBox>
        </SwipeableDrawer>
      </Fragment>
      <Parallax />
      <Homepage id="home" />
      <Gallery id="galeria" />
      <About id="sobre-mim" />
      <Album id="ouca-agora" />
      <Contact id="contato" />
    </>
  );
}

export default App;
