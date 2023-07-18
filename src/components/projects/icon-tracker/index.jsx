import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"
import { I } from "../icon/styles"
import { Icons } from "../icons"

export const IconTracker = () => {
    const { content } = useContext(ThemeContext)

    return(
        <Icons
        hrefDeploy={'https://duardohenrique.github.io/tracker/'}
        hrefRepo={'https://github.com/DuardoHenrique/tracker'}
          >
            <I color={content.color.html} >{content.icon.html}</I>
            <I color={content.color.css} >{content.icon.css}</I>
            <I color={content.color.javaScript} >{content.icon.javaScript}</I>
            <I color={content.color.gear} >{content.icon.gear}</I>
        </Icons>
    )
}