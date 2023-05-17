import { DivContent, DivIcon, I, P } from "./styles"

export const Content = ({ icon, iconAdditional, color, colorAdditional, text, background}) => {

    return (
        <DivContent background={background} >
            <DivIcon>
                <I color={color}>{icon}</I>

                <I color={colorAdditional}>{iconAdditional}</I>
            </DivIcon>
            <P color={color}>{text}</P>
        </DivContent>
    )
}