import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
  & .title {
      font-size: 1em;
  }
  & button {
    padding: 14px;
    background-color: #8A09C1;
    border: 0;
    margin-top: 10px;
  }
`

const ImprimirProduto = (props) => {
    const produto = props.produtos;
    
    return (
        <DivContainer>
            <img src={produto.imageUrl}></img>
            <h1 className="title">{produto.name}</h1>
            <span>{produto.value}</span>
            <button onClick={() => props.add(produto)}>Adicionar ao Carrinho</button>
        </DivContainer>
    )
}

export default ImprimirProduto;