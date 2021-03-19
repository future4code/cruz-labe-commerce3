import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImprimirProduto from './ImprimirProduto';

const DivContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const Produtos = (props) => {
    const [produtos, setProdutos] = useState(
        [
            {
                id: 1,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 2,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 3,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 4,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 5,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 6,
                name: "Foguete da Missão Apollo 11",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            }
        ]
    );

    props.getProdutos(produtos);

    return (
        <DivContainer>
            {produtos.map((produto, index) => {
                return <ImprimirProduto add={props.addItemCarrrinho} produtos={produto} key={index} />
            })}
        </DivContainer>
    )
}

export default Produtos;