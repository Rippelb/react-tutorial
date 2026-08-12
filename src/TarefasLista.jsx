//TarefasLista.jsx

import TarefasItem from "./TarefasItem";

const TarefasLista = ({ tarefas }) => {
return (
    <ul>
        {tarefas.map((tarefa) => (
            <TarefasItem key={tarefa.id} tarefa={tarefa} />
        ))}
    </ul>
)
}

export default TarefasLista;