import React from 'react'
import ImprimirNoCarrinho from './ImprimirNoCarrinho'
import styled from 'styled-components';

const DivContainer = styled.div`
    margin-right: 10px;
    & .carrinho {
        display: flex;
        text-align: center;
        border: 1px solid #8A09C1;
        transition-duration: 1s;
    }
`

const Carrinho = (props) => {
    const carrinho = props.getCarrinho;

    const imprimir = carrinho.map((item, index) => {
        return <ImprimirNoCarrinho item={item.produto} qtd={item.qtd} key={index} remover={() => props.remover(index)} /> 
    })

    return (
        <DivContainer>
            <h1 className="carrinho"><span>{props.total === 0 ? "" : props.total + " item(s) no"}</span>Carrinho</h1>
            <div>
                {imprimir}
            </div>
        </DivContainer>
    )
}

export default Carrinho;

