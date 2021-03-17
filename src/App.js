import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'


const CorpoDoSite = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px
  gap: 8px;
`
const CabecalhoTeste = styled.div`
  background-color: red;
  display: flex;
  box-align: center;
  align-items: center;
  box-pack: justify;
  justify-content: space-between;
  padding: opx 16px
  
`
function App() {
  return (
    <CorpoDoSite>
        <CabecalhoTeste>
          <p>Quantidade de prodytos</p>

          <label>Ordenação:
            <select>
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Decrescente</option>
            </select>

          </label>


        </CabecalhoTeste>
    </CorpoDoSite>
  );
}

export default App;
