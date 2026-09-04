import { createContext, useState } from "react";

//cria um contexto
export const ThemeContext = createContext();

//cria o provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    

    const toogleTheme = () => {
        setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
        const body = document.body;
        body.className = theme === "light" ? "dark" : "light";
    }

    return (
        <ThemeContext value={{ theme, toogleTheme }}>
            {children}
        </ThemeContext>
    );
}