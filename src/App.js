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
  //const [produtos, setProdutos] = useState();
  const [carrinho, setCarrinho] = useState([]);
  
  const addItemCarrrinho = (produto) => {

    for(let item = 0; item < carrinho.length; item++){
      if(carrinho[item].produto.id === produto.id){
          const qtd = carrinho[item].qtd = carrinho[item].qtd + 1;
          //setCarrinho([carrinho[item].qtd = qtd])
          console.log(qtd);
          console.log(carrinho);
          return null;
      }
    }
    const novoProduto = {
      produto: produto,
      qtd: 1,
    }
    console.log(novoProduto);
    setCarrinho([...carrinho, novoProduto]);
    console.log(carrinho);
  }

  const addProduto = () => {

  }

  return (
    <DivContainer>
      <DivFiltro> 
        <Filtro />
      </DivFiltro>
      <DivProdutos>
        <Produtos addItemCarrrinho={addItemCarrrinho} />
      </DivProdutos>
      <DivCarrinho>
        <Carrinho getCarrinho={carrinho} />
      </DivCarrinho>
    </DivContainer>
  );
}

export default App;
