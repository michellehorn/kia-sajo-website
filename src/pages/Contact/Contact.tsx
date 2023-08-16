import { photo2 } from "../../assets/images"
import { AnimationImg } from "../../styles/shared"
import { ContactSection } from "./Contact.styles"


export const Contact = () => {

    return(
        <ContactSection>
            <AnimationImg src={photo2} animationType="fromRight"/>
        </ContactSection>
    )
}