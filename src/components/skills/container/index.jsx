import { useContext } from "react"
import { Card } from "../card"
import { DivContainer } from "./styles"
import { ThemeContext } from "../../../contexts/theme-context"
import { Expected } from "../expected"
import { Front } from "../frontend"
import { Back } from "../backend"

import { BsGit, BsGithub } from "react-icons/bs"
import {GiBrain} from "react-icons/gi"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {RiReactjsLine} from "react-icons/ri"
import {SiJest} from "react-icons/si"
import {FaPython} from "react-icons/fa"
import {BsFillGearFill} from "react-icons/bs"
import {TbBrandNpm} from "react-icons/tb"
import {SiYarn} from "react-icons/si"

export const Container = () => {
    const { theme } = useContext(ThemeContext);

    const iconExpected = [<GiBrain />,<BsGit />,<BsGithub />, <TbBrandNpm />, <SiYarn />]
    const iconFront = [<AiFillHtml5 />, <DiCss3 />, <SiJavascript />, <RiReactjsLine />, <SiJest />, <BsFillGearFill />,]
    const iconBack = <FaPython />

    return (
            <DivContainer shadowColor={theme.fontColorTitle}>
                <Card title='Essencial' description={<Expected icon={iconExpected}/> }/>

                <Card title='Front-End' icon={<BsGit />} description={<Front icon={iconFront} />} />

                <Card title='Back-End'icon={<BsGithub />} description={<Back icon={iconBack}  />} />
            </DivContainer>
    )
}