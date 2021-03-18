import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
  flex-grow: 1;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-flow: column nowrap;
  & .title {
      font-size: 1em;
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