import { useState } from "react"
import { DivGif } from "./styles"

export const Gif = ({gif, print}) => {
    const [mouseInHover, setMouseInHover] = useState(false)

    return (
        <DivGif
        onMouseEnter={() => setMouseInHover(true)}
        onMouseLeave={() => setMouseInHover(false)}
        >
            <img src={mouseInHover ? gif : print } />
        </DivGif>
    )
}