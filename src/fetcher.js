// fetcher.js
export const fetcher = async (url) => {
    const resposta = await fetch(url);
    if (!resposta.ok) {
        throw new Error('Erro ao buscar os dados da API')
    }
    return resposta.json();
}