import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMoneda from '../hooks/useSelectMoneda'
import { monedas } from '../../data/monedas'
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMoneda('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMoneda('Elige tu criptomoneda', criptos)


    useEffect(() => {
        const consulatarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url)
            const resultado = await respuesta.json();

            // Retorno de valores de la api a solo id y nombre
            const arrayCriptos = resultado.Data.map(criptomoneda => {
                const objeto = {
                    id: criptomoneda.CoinInfo.Name,
                    nombre: criptomoneda.CoinInfo.FullName
                }
                return objeto;
            })

            setCriptos(arrayCriptos);
        }
        consulatarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if ([moneda, criptomoneda].includes('')) {
            setError(true)

            return
        }

        setError(false)
        setMonedas({
            moneda, 
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form
                onSubmit={handleSubmit}
            >

                <SelectMonedas />
                <SelectCriptomoneda />

                <InputSubmit
                    type="submit"
                    value='Cotizar'
                />
            </form>
        </>
    )
}

export default Formulario
