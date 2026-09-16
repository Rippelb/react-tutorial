// Usuarios.jsx
import useSWR from 'swr';
import { fetcher } from '../fetcher';
const Usuarios = () => {
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

    return (
        <div>
            <h2>Usuarios</h2>
            <p>Dados requisitados por API</p>
            <div>{isLoading ? 'Carregando...' : ""}</div>
            <div>
                <ul>{data && data.map(user =>(
                <li key={user.id}>{user.name}</li>
            ))}</ul>
            </div>
        </div>
    );
}

export default Usuarios;