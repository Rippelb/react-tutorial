import { useState } from "react"

const Paragrafo = (props) => {
    const [pontos, setPontos] = useState(0);

    const aumentarPontos = () => {
        setPontos(pontos + 1);
    }

    const diminuirPontos = () => {
        if (pontos > 0)
        setPontos(pontos - 1);
}

    return (
        <div>
            <p>{props.nome} tem {pontos} pontos.
            <button onClick={aumentarPontos}>+</button>
            <button onClick={diminuirPontos}>-</button></p>
            
        </div>
    );
}
export default Paragrafo;