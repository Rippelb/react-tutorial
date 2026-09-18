// src/pages/Home.jsx
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h2>Página inicial</h2>
            <p>Bem-vindos à página inicial desta aplicação gloriosa!</p>
        </div>
    )
}

export default Home;