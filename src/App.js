import React from 'react'
import './App.css';
import styled from 'styled-components'
import Filtro from './components/Filtro';
import { Produtos } from './components/Produtos';
import Carrinho from './components/Carrinho';
import { useState, useEffect } from 'react';

const DivContainer = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1140px;
  grid-template-columns: 240px 1fr 1fr 1fr;
  grid-template-rows: auto 2fr;
`
const DivFiltro = styled.div`
  grid-row-start: 2;

`
const DivProdutos = styled.div`
  grid-area: 2/2/4/5;
`
const DivCarrinho = styled.div`
  grid-area: 1/1/2/5;
  display: flex;
  justify-content: space-between;
  & h1 {
    padding: 10px;
  }
`
const DivSearch = styled.input`
  display: block;
  margin: 0 auto;
  width: 98%;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0,0,0, 0.1);
  border: 0;
  border-bottom: 2px solid #8A09C1;
  color: #999;
  font-size: 1em;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px
  gap: 8px;
  height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/29262.jpg) 
  
`
const DivFiltro = styled.div`
  border: 5px solid aqua;
  border-style: groove;
  margin: 5px;
  height: 70%;
  color: aqua;

`
const DivProdutos = styled.div`
  border: 5px solid aqua;
  border-style: groove;
  margin: 5px;
  color: aqua;

`
const DivCarrinho = styled.div`
  border: 5px solid aqua;
  border-style: groove;
  margin: 5px;
  height: 70%;
  color: aqua;
`

function App() {

  /* ************************
     ************************
     ************************
  */
  const [filtro, setFiltro] = useState({
    inputMin: 1,
    inputMax: 10000,
    inputNome: "",
    ordenar: "crescente",
  });

  const getLocalStorage = localStorage.getItem("listaProdutos");
  const listaObj = JSON.parse(getLocalStorage);
  const [carrinho, setCarrinho] = useState(() => {
    if (localStorage.getItem("listaProdutos")) {
      return listaObj;
    }
    return [];
  });
  console.log(filtro.ordenar);
  const [total, setTotal] = useState(() => {
    let total = 0;
    for(let i = 0; i < carrinho.length; i++){
      
      total += carrinho[i].qtd;
    }
    return total;
  });

  /* ************************
     ************************
     ************************
  */

  const handleInputMin = (event) => {
    setFiltro({
      inputMin: Number(event.target.value),
      inputMax: filtro.inputMax,
      ordenar: filtro.ordenar,
    })
  }

  const handleInputMax = (event) => {
    setFiltro({
      inputMax: Number(event.target.value),
      inputMin: filtro.inputMin,
      ordenar: filtro.ordenar,
    })
  }

  const handleInputNome = (event) => {
    setFiltro({
      inputNome: event.target.value,
    })
  }
  
  const handleOrdenar = (event) => {
    setFiltro({
      ordenar: event.target.value,
      inputMin: filtro.inputMin,
      inputMax: filtro.inputMax,
    })
  }
  /* ****************************
     ADICIONAR ITENS NO CARRINHO
  */
  const addItemCarrrinho = (produto) => {
    for (let item = 0; item < carrinho.length; item++) {
      if (carrinho[item].produto.id === produto.id) {
        carrinho[item].qtd = carrinho[item].qtd + 1;
        setTotal(total + 1)
        setCarrinho([...carrinho]);
        return null;
      }
    }
    const novoProduto = {
      produto: produto,
      qtd: 1,
    }

    setTotal(total + 1)
    setCarrinho([...carrinho, novoProduto], novoProduto.qtd);
    console.log(total);
  }

  /* **************************
     REMOVER ITENS DO CARRINHO
  */
  const removerItem = (key) => {
    if (carrinho[key].qtd > 1) {
      carrinho[key].qtd = carrinho[key].qtd - 1
      setTotal(total - 1)
      setCarrinho([...carrinho]);
    } else {
      const atualizado = carrinho.filter((item) => {
        carrinho[key].qtd = 0
        setTotal(total - 1)
        return item.qtd !== 0;
      })
      setCarrinho(atualizado);
    }
  }

  /* **************************
     HOOK *********************
  */

  useEffect(() => {
    localStorage.setItem("listaProdutos", JSON.stringify(carrinho));
    localStorage.setItem("listaProdutosTotal", JSON.stringify(total));
  }, [carrinho]);


  return (
    <DivContainer>
      <DivFiltro>
        <Filtro inputMin={handleInputMin}
          inputMax={handleInputMax}
          inputOrdenar={handleOrdenar}
          valueMin={filtro.inputMin}
          valueMax={filtro.inputMax} />
      </DivFiltro>
      <DivProdutos>
        <DivSearch onChange={handleInputNome} value={filtro.inputNome} placeholder="O que você procura?" />
        <Produtos filtro={filtro} addItemCarrrinho={addItemCarrrinho} />
      </DivProdutos>
      <DivCarrinho>
        <h1>Labe Commerce</h1>
        <Carrinho getCarrinho={carrinho} total={total} remover={removerItem} />
      </DivCarrinho>
    </DivContainer>
  );
}

export default App;


//projeto ainda não completo, outra parte está com o Eduardo