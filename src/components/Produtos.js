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
                name: "Traje Espacial Azul",
                value: 15700.0,
                imageUrl:  "https://picsum.photos/200/200",
            },
            {
                id: 2,
                name: "Buzz Lightyear",
                value: 22385.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 3,
                name: "Traje Espacial Cinza",
                value: 12400.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 4,
                name: "Traje Espacial Cromado",
                value: 28000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 5,
                name: "Traje Espacial Laranja ",
                value: 9500.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 6,
                name: "Traje Espacial Michellin",
                value: 19600.0,
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