import {useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'lato',sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    font-family: 'lato',sans-serif;
    font-size: 18px;
    width: 100%;
    padding: 14px;
    border-radius: 5px;
`


const useSelectMoneda = (label, opciones) => {

    const [state, setState] = useState('')
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                // Leyendo valor usando el hook de state
                onChange = { e => setState(e.target.value) }
            >
                <option value="">Seleccione</option>
                
                {opciones.map( opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}

            </Select>
        </>
    )

    return [ state, SelectMonedas ];
}

export default useSelectMoneda
