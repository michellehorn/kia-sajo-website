import ContainerParallax from "./components/ContainerParallax";
import { About, Gallery, Homepage } from "./pages";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerParallax>
        <Homepage />
        <About />
        <Gallery />
      </ContainerParallax>
    </>
  );
}

export default App;
