import { Gif } from "../gif"
import { DivCard } from "./styles"

export const Card = ({ print, gif, icon }) => {
    return (
        <DivCard>
                <Gif print={print} gif={gif} />
                {icon}
        </DivCard>
    )
}