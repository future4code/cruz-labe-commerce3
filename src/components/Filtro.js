import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 30px 30px;
`

const Filtro = () => {
    return(
        <DivContainer>
            <label>Valor mínimo:</label>
            <input type="number" />    
            <label>Valor máximo:</label>
            <input type="number" />    
            <label>Busca por nome:</label>
            <input type="text" />    
        </DivContainer>
    )
}

export default Filtro;

