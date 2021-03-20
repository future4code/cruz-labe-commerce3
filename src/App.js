import React from 'react'
import './App.css';
import styled from 'styled-components'
import Filtro from './components/Filtro';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import { useState } from 'react';

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px
  gap: 8px;
  height: 100vh;
`
const DivFiltro = styled.div`
  border: 1px solid black;

`
const DivProdutos = styled.div`
  border: 1px solid red;

`
const DivCarrinho = styled.div`
  border: 1px solid blue;
`

function App() {

  const [carrinho, setCarrinho] = useState([]);
  //const [produtos, setProdutos] = useState([]);

  const getProdutos = (get) => {
    return get;
  }
 
  const addFiltro = (filtros) => {
    
    console.log(getProdutos());
  }

  const addItemCarrrinho = (produto) => {

    for(let item = 0; item < carrinho.length; item++){
      if(carrinho[item].produto.id === produto.id){
          carrinho[item].qtd = carrinho[item].qtd + 1;
          setCarrinho([...carrinho]);
          return null;
      }
    }
    const novoProduto = {
      produto: produto,
      qtd: 1,
    }

    setCarrinho([...carrinho, novoProduto]);
  }

  const removerItem = (key) => {
    if(carrinho[key].qtd > 1) {
      carrinho[key].qtd = carrinho[key].qtd - 1
      setCarrinho([...carrinho]);
    } else{
      const atualizado = carrinho.filter((item) => {
        carrinho[key].qtd = 0
        return item.qtd !== 0;
      })
      setCarrinho(atualizado);
      console.log(atualizado);
    }
  }
  addFiltro();
  return (
    <DivContainer>
      <DivFiltro> 
        <Filtro addFiltro={addFiltro} />
      </DivFiltro>
      <DivProdutos>
        <Produtos addItemCarrrinho={addItemCarrrinho} getProdutos={getProdutos} />
      </DivProdutos>
      <DivCarrinho>
        <Carrinho getCarrinho={carrinho} remover={removerItem} />
      </DivCarrinho>
    </DivContainer>
  );
}

export default App;


//projeto ainda não completo, outra parte está com o Eduardo