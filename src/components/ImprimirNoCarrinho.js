import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  & .qtd {
      margin-right: 15px;
      color: orange;
  }
  & button {
      background-color: #8A09C1;
      border: 0;
      align-self: flex-start;
      padding: 8px;
  }
`

const ImprimirNoCarrinho = (props) => {
    const item = props.item;
    return (
        <DivContainer>
            <span className="qtd">{props.qtd}</span>
            <span>{item.name}</span>
            <button onClick={props.remover}>Remover</button>
        </DivContainer>
    )
}

export default ImprimirNoCarrinho;