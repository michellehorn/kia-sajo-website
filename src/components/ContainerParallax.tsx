import { ReactNode } from "react";
import { Parallax } from "../styles/shared";

const ContainerParallax = ({ children }: { children: ReactNode }) => (
  <Parallax>
    {children}
  </Parallax>
);

export default ContainerParallax;
