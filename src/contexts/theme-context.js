import { createContext, useState } from "react";
import { BsFillMoonFill } from 'react-icons/bs';
import { GiSun } from 'react-icons/gi'

import { BsGit, BsGithub } from "react-icons/bs"
import { GiBrain } from "react-icons/gi"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { SiJest } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { BsFillGearFill } from "react-icons/bs"
import { TbBrandNpm } from "react-icons/tb"
import { SiYarn } from "react-icons/si"

export const themes = {
    light: {
        fontColorText: 'rgba(44, 48, 48, 0.94)',
        fontColorTitle: 'rgba(0, 0, 0, 1)',
        background: 'linear-gradient(rgba(255, 255, 255, 1), rgba(145, 228, 240, 1))',
        icon: <BsFillMoonFill />,
        colorIcon: 'rgba(66, 24, 103, 1)',
        colorIconShadow: 'rgba(66, 24, 103, 0.3)',
        backgroundCard: 'rgba(43, 230, 44, 0.1)',
    },
    dark: {
        fontColorText: 'rgba(192, 198, 203, 1)',
        fontColorTitle: 'rgba(250, 250, 250, 1)',
        background: 'linear-gradient(rgba(0,0,0,1), rgba(40, 6, 64, 1)',
        icon: <GiSun />,
        colorIcon: 'rgba(211, 240, 21, 1)',
        colorIconShadow: 'rgba(211, 240, 21, 0.3)',
        backgroundCard: 'rgba(14, 116, 14, 0.2)',
    }
};

const content = {
    icon: {
        brain: <GiBrain />,
        git: <BsGit />,
        gitHub: <BsGithub />,
        npm: <TbBrandNpm />,
        yarn: <SiYarn />,
        html: <AiFillHtml5 />,
        css: <DiCss3 />,
        javaScript: <SiJavascript />,
        react: <RiReactjsLine />,
        jest: <SiJest />,
        gear: <BsFillGearFill />,
        python: <FaPython />,
    },
    color: {
        brain: 'rgb(242,242,242)',
        git: 'rgb(229,75,47)',
        gitHub: 'rgb(98,91,140)',
        npm: 'rgb(193,53,52)',
        yarn: 'rgb(44,142,187)',
        html: 'rgb(216,73,36)',
        css: 'rgb(36,73,216)',
        javaScript: '#D3BF15',
        react: 'rgb(92,207,238)',
        jest: 'rgb(145,63,86)',
        api: 'black',
        python: '#4A9349'
    },

    background: {
        brain: 'rgba(42, 82, 241, 1)',
        git: 'rgba(237, 132, 111, 1)',
        gitHub: 'rgba(147, 121, 223, 1)',
        npmAndYarn: 'linear-gradient(#65B0D2, #D46565)',
        html: 'rgba(235, 137, 112, 1)',
        css: '#5572E1',
        javaScript: '#DCD491',
        react: '#A2E3F4',
        jest: '#C6718D',
        api: '#35373B',
        python: '#87CD86'
    },
    text: {
        brain: 'Lógica de programação',
        git: 'Git',
        gitHub: 'GitHub',
        npmAndYarn: 'NPM/YARN',
        html: 'HTML5',
        css: 'CSS3',
        javaScript: 'JavaScript',
        react: 'ReactJS',
        jest: 'Jest',
        api: 'API',
        python: 'Python',
        grid: 'Landing Page criada  em HTML e CSS, proposta pelo curso DevQuest, onde pude por em prática os conhecimentos adquiridos em HTML e CSS, sobre tudo o Display Grid,',
        mario: 'Projeto proposto pelo curso DevQuest, após uma apresentação ao JavaScript, onde pude iniciar minha experiência em interação com o usuário.',
        newYorkDu: 'Projeto desenvolvido sozinho utilizando os conhecimentos em HTML5, CSS3, JavaScript, React e conceitos de API. Projeto que pra mim foi muito desafiador, principalmente por mesclar "todos" esses conhecimentos em um único projeto. Ainda não está finalizado, falta uma seção e otimizações no código.'
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)


    return (
        <ThemeContext.Provider value={{ theme, setTheme, content }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

