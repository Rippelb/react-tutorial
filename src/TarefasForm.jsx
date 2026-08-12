//TarefasForm.jsx
import { useState} from "react";

const TarefasForm = ({onAddTarefa }) => {
    const [tarefa, setTarefa] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (tarefa.trim()) {
            onAddTarefa(tarefa.trim());
            setTarefa("");
        }
    };

    return (
        <form onSUbmit={handleSubmit}>
            <input type="text" value= {tarefa} onChange={(e) => setTarefa(e.target.value)} />
            <button type= "submit">Adicionar</button>
        </form>
    )
}

export default TarefasForm;