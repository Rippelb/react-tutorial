//TarefasLista.jsx

import TarefasItem from "./TarefasItem";

const TarefasLista = ({ tarefas, onEditTarefa, onDeleteTarefa }) => {
return (
    <ul>
        {tarefas.map((tarefa) => (
            <TarefasItem key={tarefa.id} tarefa={tarefa}
            onDeleteTarefa={onDeleteTarefa}
            onEditTarefa={onEditTarefa}
            />
        ))}
    </ul>
)
}

export default TarefasLista;