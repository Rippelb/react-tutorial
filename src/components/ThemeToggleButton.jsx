import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemeToggleButton = () => {
    const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toogleTheme}>
        Alterar dificuldade para{theme === "light" ? "Negro" : "Branco"}
    </button>
  )
}
