import { useContext, useState } from 'react';


import { Div, I } from './styles';
import { ThemeContext, themes } from '../../../contexts/theme-context';


export const IconTogglerTheme = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  const inEffect = `
  @keyframes teste {
    from { box-shadow: 0 0 20px ${theme.colorIconShadow}}
    to {box-shadow: 0 0 20px ${theme.colorIcon  } ;}
  }
`;

  return (
    <>
      <style children={inEffect} />
      <Div
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
        style={{
          animationName: 'teste',
          animationDuration: '.8s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationDirection: 'alternate-reverse'
        }}
      >
        <I style={{
          color: theme.colorIcon
        }}>{theme.icon}</I>
      </Div>
    </>
  )
}

// () => setTheme(theme === themes.light ? themes.dark : themes.light)