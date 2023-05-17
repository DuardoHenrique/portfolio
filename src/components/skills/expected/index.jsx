import { useContext } from "react"
import { Content } from "../content"
import { ThemeContext } from "../../../contexts/theme-context"

export const Expected = ({ icon }) => {
    const { content } = useContext(ThemeContext)

    return (
        <>
            <Content
                icon={icon[0]}
                text={content.text.expected.logic}
                color={content.color.expected.logic}
                background={content.background.expected.logic}
            />

            <Content
                icon={icon[1]}
                text={content.text.expected.git}
                color={content.color.expected.git}
                background={content.background.expected.git}
            />

            <Content
                icon={icon[2]}
                text={content.text.expected.gitHub}
                color={content.color.expected.gitHub}
                background={content.background.expected.gitHub}
            />
            
            <Content
                icon={icon[3]}
                iconAdditional={icon[4]}
                text={content.text.expected.npmAndYarn}
                color={content.color.expected.npm}
                colorAdditional={content.color.expected.yarn}
                background={content.background.expected.npmAndYarn}
            />
        </>
    )
}