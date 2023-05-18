import { createContext, useState } from "react";
import { BsFillMoonFill } from 'react-icons/bs';
import { GiSun } from 'react-icons/gi'
import zam from "../assets/zam.jpg"
import mamacoPrego from "../assets/macaco-prego.jpg"

export const themes = {
    light: {
        fontColorText: 'rgba(44, 48, 48, 0.94)',
        fontColorTitle: 'rgba(0, 0, 0, 1)',
        background: 'linear-gradient(rgba(255, 255, 255, 1), rgba(145, 228, 240, 1))',
        icon: <BsFillMoonFill />,
        colorIcon: 'rgba(66, 24, 103, 1)',
        colorIconShadow: 'rgba(66, 24, 103, 0.3)',
        backgroundCard: '#E894E4',
        img: mamacoPrego,
    },
    dark: {
        fontColorText: 'rgba(192, 198, 203, 1)',
        fontColorTitle: 'rgba(250, 250, 250, 1)',
        background: 'linear-gradient(rgba(0,0,0,1), rgba(40, 6, 64, 1)',
        icon: <GiSun />,
        colorIcon: 'rgba(211, 240, 21, 1)',
        colorIconShadow: 'rgba(211, 240, 21, 0.3)',
        backgroundCard: '#090D41    ',
        img: zam,
    }
};

const content = {
    color: {
        expected: {
            logic: 'rgb(242,242,242)',
            git: 'rgb(229,75,47)',
            gitHub: 'rgb(98,91,140)',
            npm: 'rgb(193,53,52)',
            yarn: 'rgb(44,142,187)',
        },
        front: {
            html: 'rgb(216,73,36)',
            css: 'rgb(36,73,216)',
            javaScript: '#D3BF15',
            react: 'rgb(92,207,238)',
            jest: 'rgb(145,63,86)',
            api: 'black'
        },
        back: {
            python: '#4A9349'
        }
    },

    background: {
        expected: {
            logic: 'rgba(42, 82, 241, 1)',
            git: 'rgba(237, 132, 111, 1)',
            gitHub: 'rgba(147, 121, 223, 1)',
            npmAndYarn: 'linear-gradient(#65B0D2, #D46565)',
        },
        front: {
            html: 'rgba(235, 137, 112, 1)',
            css: '#5572E1',
            javaScript: '#DCD491',
            react: '#A2E3F4',
            jest: '#C6718D',
            api: '#35373B'
        },
        back: {
            python: '#87CD86'
        }
    },

    text: {
        expected: {
           logic: 'Lógica de programação',
           git: 'Git',
           gitHub: 'GitHub',
           npmAndYarn: 'NPM/YARN',
        },
        front: {
            html: 'HTML5',
            css: 'CSS3',
            javaScript: 'JavaScript',
            react: 'ReactJS',
            jest: 'Jest',
            api: 'API'
        },
        back: {
            python: 'Python'
        }
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

