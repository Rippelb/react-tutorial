import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// src/pages/UsuarioDetalhe.jsx
const UsuarioDetalhe = () => {
    // Extrair ID da URL (/usuarios/:id)
    const { id } = useParams();

    // Estados para controlar os dados do usuário e o estado de carregamento
    const [usuario, setUsuario] = useState(null);
    const [carregando, setCarregando] = useState(true);

    // useEffect para disparar evento de consulta de usuário
    useEffect(() => {
        async function buscarUsuario() {
            try {
                setCarregando(true);
                
                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

                const jsonData = await data.json();
                
                setUsuario(jsonData);
            } catch (erro) {
                console.error("Erro ao buscar usuário:", erro);
            } finally {
                setCarregando(false);
            }
        }

        buscarUsuario();
    }, [id]); // id é o parâmetro a ser observado

    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            {carregando ? (
                <p>Carregando...</p>
            ) : (
                <ul>
                    <li>Nome: {usuario.name}</li>
                    <li>E-mail: {usuario.email}</li>
                    <li>Site: {usuario.website}</li>
                </ul>
            )}
        </div>
    )
}

export default UsuarioDetalhe;