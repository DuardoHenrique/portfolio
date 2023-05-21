import { Gif } from "../gif"
import { DivCard } from "./styles"

export const Card = ({ print, gif, icon, href }) => {
    return (
        <DivCard>
            <a href={href} target="_blank">
                <Gif print={print} gif={gif} />
            </a>
                {icon}
        </DivCard>
    )
}