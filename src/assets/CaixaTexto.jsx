import { useState } from "react"

const CaixaTexto = () => {
    const [texto, setTexto] = useState('')

    const GerenciaTexto = (event) => {
        setTexto(event.target.value)
    }

    return(
        <div>
            <h3>Input</h3>
            <input type="text" value={texto} onInput={GerenciaTexto}/>
                <p>Você digitou: {texto}</p>
        </div>
    )
}

export default CaixaTexto