import React from 'react'
import ImprimirNoCarrinho from './ImprimirNoCarrinho'
import { useState } from 'react';

const Carrinho = (props) => {

    const carrinho = props.getCarrinho;

    /* const [produto, setProdutos] = useState([{
        qtd: 0,
        obj: []
    }]);
 */
    //const [qtd, setQtd] = useState([]);

    const imprimir = carrinho.map((item, index) => {
        //setProdutos([...produto, item]);
        return <ImprimirNoCarrinho item={item.produto} qtd={item.qtd} key={index} remover={() => props.remover(index)} />
    })

    return (
        <div>
            <h1>Carrinho</h1>
            <div>
                {imprimir}
            </div>
        </div>
    )
}

export default Carrinho;

