import React, { useImperativeHandle, useState } from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 30px 30px;
`

const Filtro = (props) => {
    const [filtro, setFiltro] = useState({
        inputMin: "",
        inputMax: "",
        inputNome: "",
    })
    //let {valorMin, valorMax, nome} = filtro
    const handleInputMin = (event) =>{
        setFiltro({
            inputMin: Number(event.target.value),
        })
        props.addFiltro(filtro);
    }

    const handleInputMax = (event) =>{
        setFiltro({
            inputMax: Number(event.target.value),
        })
        props.addFiltro(filtro);
    }

    const handleInputNome = (event) => {
        setFiltro({
            inputNome: event.target.value,
        })
        props.addFiltro(filtro);
    }


    return(
        <DivContainer>
            <label>Valor mínimo:</label>
            <input onChange={handleInputMin} value={filtro.inputMin} type="number" />    
            <label>Valor máximo:</label>
            <input onChange={handleInputMax} value={filtro.inputMax} type="number" />    
            <label>Busca por nome:</label>
            <input onChange={handleInputNome} value={filtro.inputNome} type="text" />    
        </DivContainer>
    )
}

export default Filtro;

