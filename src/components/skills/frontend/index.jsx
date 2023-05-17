import { useContext } from "react"
import { Content } from "../content"
import { ThemeContext } from "../../../contexts/theme-context"

export const Front = ({ icon }) => {
    const { content } = useContext(ThemeContext)

    return (
        <>
            <Content
                icon={icon[0]}
                text={content.text.front.html}
                color={content.color.front.html}
                background={content.background.front.html}
            />
            <Content
                icon={icon[1]}
                text={content.text.front.css}
                color={content.color.front.css}
                background={content.background.front.css}
            />
            <Content
                icon={icon[2]}
                text={content.text.front.javaScript}
                color={content.color.front.javaScript}
                background={content.background.front.javaScript}
            />
            <Content
                icon={icon[3]}
                text={content.text.front.react}
                color={content.color.front.react}
                background={content.background.front.react}
            />
            <Content
                icon={icon[4]}
                text={content.text.front.jest}
                color={content.color.front.jest}
                background={content.background.front.jest}
            />
            <Content
                icon={icon[5]}
                text={content.text.front.api}
                color={content.color.front.api}
                background={content.background.front.api}
            />
        </>
    )
}