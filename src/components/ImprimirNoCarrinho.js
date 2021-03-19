import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

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
            <button onClick={props.remover}>Remover</button>
        </DivContainer>
    )
}

export default ImprimirNoCarrinho;