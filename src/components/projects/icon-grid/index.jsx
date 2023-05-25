import { useContext } from "react"
import { I } from "../icon/styles"
import { Icons } from "../icons"
import { ThemeContext } from "../../../contexts/theme-context"

export const IconGrid = () => {
    const { content } = useContext(ThemeContext)

    return (
        <Icons
            hrefDeploy={'https://duardohenrique.github.io/landing-page-grid/'}
            hrefRepo={'https://github.com/DuardoHenrique/landing-page-grid'}
        >
            <I color={content.color.html}>{content.icon.html}</I>
            <I color={content.color.css} >{content.icon.css}</I>
        </Icons>
    )
}