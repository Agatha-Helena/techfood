const BASE_URL = "http://localhost:3000"

//fazer a busca dos produtos do banco
async function buscarProdutos() {
    const response = await fetch(`${BASE_URL}/produtos`)
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro $ {response.status}`)
        return dados.dados
}

//criar os pedidos 
async function criarPedido(cliente, itens) {
    const response = await fetch(`${BASE_URL}/pedidos`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({cliente, itens}),
    })
    const dados = await response.json()
    if(!response.ok) throw new Error (dados.erro || `Erro ${response.status}`)
        return dados
}

//buscar os pedidos que foram inseridos no banco

async function buscarPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`)
    const dados = await response.json()

    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
        return dados
}

//deletar pedido do banco de dados

async function deletarPedido(id) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}`,{
        method: "DELETE"
    })
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
        return dados
}

//

async function atualizarStatusPedido(id, novoStatus) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status`,{
        method: "PATCH",
        headers: {"Content-Type": "application"},
        body: JSON.stringify({status: novoStatus})
    })
    const dados = await response.json()
    if(!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
        return dados
}