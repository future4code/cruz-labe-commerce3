import React, { useState } from 'react'
import styled from 'styled-components'
import ImprimirProduto from './ImprimirProduto';

const DivContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
    margin-bottom: 60px;
`

export const Produtos = (props) => {
    const [produtos, setProdutos] = useState(
        [
            {
                id: 1,
                name: "Foguete Espacial",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 2,
                name: "Disco Voador",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 3,
                name: "Planeta Terra",
                value: 5000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 4,
                name: "ET Bilu",
                value: 4000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 5,
                name: "Lua de Saturno",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 6,
                name: "Galáxia de Andrômeda",
                value: 10000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 5,
                name: "Satélite da Nasa",
                value: 3000.0,
                imageUrl: "https://picsum.photos/200/200",
            },
            {
                id: 6,
                name: "Buraco Negro",
                value: 3000.0,
                imageUrl: "https://picsum.photos/200/200",
            }
        ]
    );

    let { inputMin, inputMax, inputNome, ordenar } = props.filtro;

    const getProdutos = produtos.filter((item) => {
        if ((item.value <= inputMax) && (item.value >= inputMin)) {
            return item;
        }
        if (inputMax === 0) {
            return item.value >= inputMin;
        }
        if (item.name.toLocaleLowerCase().indexOf(inputNome) !== -1) {
            return item;
        }
    })

    if (ordenar === "crescente") {
        getProdutos.sort((a, b) => a.value - b.value);
        console.log(produtos);
    } else {
        getProdutos.sort((a, b) => b.value - a.value);
        console.log(produtos);
    } 
    console.log(props.filtro);
    return (
        <DivContainer>
            {getProdutos.map((produto, index) => {
                return <ImprimirProduto add={props.addItemCarrrinho} produtos={produto} key={index} />
            })}
        </DivContainer>
    )
}

//export default Produtos;