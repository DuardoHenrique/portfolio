import { useContext } from "react"
import { I } from "../icon/styles"
import { Icons } from "../icons"
import { ThemeContext } from "../../../contexts/theme-context"

export const IconApi = () => {
    const { content } = useContext(ThemeContext)

    return(
        <Icons
        hrefDeploy='https://new-york-du.netlify.app/'
        hrefRepo={'https://github.com/DuardoHenrique/dudu-times'}
        >
            <I color={content.color.html}>{content.icon.html}</I>
            <I color={content.color.css} >{content.icon.css}</I>
            <I color={content.color.javaScript} >{content.icon.javaScript}</I>
            <I color={content.color.react} >{content.icon.react}</I>
            <I color={content.color.gear} >{content.icon.gear}</I>
        </Icons>
    )
}