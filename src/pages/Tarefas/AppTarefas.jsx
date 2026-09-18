// AppTarefas.jsx
import { useState } from "react";
import TarefasLista from "./TarefasLista";
import TarefasForm from "./TarefasForm";

const AppTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (texto) => {
        const novaTarefa = {
            // Usamos a data, pois não temos gerenciamento de ID (sem backend)
            id: Date.now(),
            texto: texto,
        };

        setTarefas([...tarefas, novaTarefa]);
    }

    const editTarefa = (id, novoTexto) => {
        setTarefas(tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, texto: novoTexto } : tarefa));
    }

    const deleteTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }

    return (
        <div>
            <h1>💡 Keepão React</h1>
            <TarefasForm onAddTarefa={addTarefa} />
            <TarefasLista tarefas={tarefas} onEditTarefa={editTarefa} onDeleteTarefa={deleteTarefa} />
        </div>
    );
}

export default AppTarefas;