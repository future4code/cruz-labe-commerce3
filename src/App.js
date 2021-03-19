import React from 'react'
import './App.css';
import styled from 'styled-components'
import Filtro from './components/Filtro'
import Produtos from './components/Produtos'
import Carrinho from './components/Carrinho'


const corpoDoSite = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px
  gap: 8px;
  height: 100 vh;
`
const filtro = styled.div`
  border: 1px solid black;

`
const produtos = styled.div`
  border: 1px solid red;

`
const carrinho = styled.div`
  border: 1px solid blue;

`

function App() {
  return (
  

    <div>
      <p>oi</p>
    </div>

    
  );
}

export default App;


//projeto ainda não completo, outra parte está com o Eduardo