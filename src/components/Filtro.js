import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 30px 30px;
    border: 1px solid #8A09C1;
    margin-right: 10px;
    & select {
        border: 1px solid #8A09C1;
        background-color: rgba(0,0,0, 0);
        color: #fff;
        padding: 10px;
        margin-top: 16px;
        & option {
        background-color: #111;
    }
    } 
`
const Filtro = (props) => {
    return (
        <DivContainer>
            <label>Valor mínimo:</label>
            <input value={props.valueMin} type="range" onChange={props.inputMin} value={props.valueMin} min="100" max="10000" step='100' />
            <label>Valor máximo:</label>
            <input value={props.valueMax} type="range" onChange={props.inputMax} value={props.valueMax} min="100" max="10000" step='100' />
            <select onChange={props.inputOrdenar}>
                <option value="crescente">crescente</option>
                <option value="decrescente">decrescente</option>
            </select>
        </DivContainer>
    )
}

export default Filtro;

