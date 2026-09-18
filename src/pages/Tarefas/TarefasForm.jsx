// TarefasForm.jsx

import { useState } from "react";

const TarefasForm = ({ onAddTarefa }) => {
    const [tarefa, setTarefa] = useState('');

    const handleSubmit = (e) => {
        // Evita que o form seja enviado
        e.preventDefault();

        if (tarefa.trim()) {
            onAddTarefa(tarefa.trim());
            setTarefa('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={tarefa} placeholder="Digite sua tarefa" onChange={(e) => { setTarefa(e.target.value) }} />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TarefasForm;