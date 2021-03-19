import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
  }
  & > span {
      flex-grow:
      border: 1px solid #444;
  }
`

const ImprimirNoCarrinho = (props) => {
    const item = props.item;
    return (
        <DivContainer>
            <span>{props.qtd}</span>
            <span>{item.name}</span>
            <button>Remover</button>
        </DivContainer>
    )
}

export default ImprimirNoCarrinho;