//AppTarefas.jsx
import{useState} from "react"
import TarefasLista from "./TarefasLista";
import TarefasForm from "./TarefasForm";

const AppTarefas = () => {
   const [tarefas, setTarefas] = useState([]);

    const addTarefa = (texto) => {
const novaTarefa =  {
    //data pq nn gerencia id
    id: Date.now(),
    texto: texto,
};
    setTarefas([...tarefas, novaTarefa]);
}
   return (
    <div>
        <h1>💡Keepão React</h1>
        <TarefasLista tarefas={tarefas} />
        <TarefasForm onAddTarefa={addTarefa} />
    </div>
   );
}

export default AppTarefas;