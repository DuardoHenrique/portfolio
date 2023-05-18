import { useContext } from "react"
import { Content } from "../content"
import { ThemeContext } from "../../../contexts/theme-context"

export const Expected = ({ icon }) => {
    const { skills } = useContext(ThemeContext)

    return (
        <>
            <Content
                icon={icon[0]}
                text={skills.text.expected.logic}
                color={skills.color.expected.logic}
                background={skills.background.expected.logic}
            />

            <Content
                icon={icon[1]}
                text={skills.text.expected.git}
                color={skills.color.expected.git}
                background={skills.background.expected.git}
            />

            <Content
                icon={icon[2]}
                text={skills.text.expected.gitHub}
                color={skills.color.expected.gitHub}
                background={skills.background.expected.gitHub}
            />

            <Content
                icon={icon[3]}
                iconAdditional={icon[4]}
                text={skills.text.expected.npmAndYarn}
                color={skills.color.expected.npm}
                colorAdditional={skills.color.expected.yarn}
                background={skills.background.expected.npmAndYarn}
            />
        </>
    )
}