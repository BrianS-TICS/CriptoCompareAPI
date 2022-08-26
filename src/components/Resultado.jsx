import styled from "@emotion/styled"

const Presentacion = styled.div`
    margin-top: 2rem;
    color: #FFF;
    font-family: 'lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 3rem;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;

    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;

    span{
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    return (
        <Presentacion>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt="Imagen de criptomoneda" 
            />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más basico del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Presentacion>
    )
}

export default Resultado
