import { Button, SwipeableDrawer } from "@mui/material";
import ContainerParallax from "./components/ContainerParallax";
import { About, Gallery, Homepage } from "./pages";
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
              <li>{item}</li>
            ))}
          </MenuBox>
        </SwipeableDrawer>
      </Fragment>
      <ContainerParallax>
        <Homepage />
        <About />
        <Gallery />
      </ContainerParallax>
    </>
  );
}

export default App;
