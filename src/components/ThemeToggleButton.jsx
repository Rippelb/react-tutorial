// src/components/ThemeToggleButton.jsx
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeToggleButton = () => { 
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={theme}>
            Mudar para o tema { theme === 'light' ? 'Escuro' : 'Claro' }
        </button>
    )
}

export default ThemeToggleButton;