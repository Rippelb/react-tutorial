// src/pages/sobre.jsx
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Sobre = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h2>Sobre</h2>
            <p>Esta é a página é sobre.</p>
        </div>
    )
}
export default Sobre;