import { Button, Link, SwipeableDrawer } from "@mui/material";
import ContainerParallax from "./components/ContainerParallax";
import { About, Album, Gallery, Homepage } from "./pages";
import GlobalStyle from "./styles/globalStyle";
import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuBox, MenuContainer } from "./styles/shared";

function App() {
  const items = ["home", "sobre-mim", "galeria", "ouca-agora", "contato"];
  const [state, toggleDrawer] = useState(false);
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
            {items.map((item) => (
              <Link key={item} href={`#${item}`}>
                {item}
              </Link>
            ))}
          </MenuBox>
        </SwipeableDrawer>
      </Fragment>
      <ContainerParallax>
        <Homepage id="home" />
        <About id="sobre-mim" />
        <Gallery id="galeria" />
        <Album id="ouca-agora" />
      </ContainerParallax>
    </>
  );
}

export default App;
