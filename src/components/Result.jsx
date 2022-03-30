import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Img = styled.img`
    display: block;
    width: 120px;

`

const Text = styled.p`
    font-size: 18px;

    span {
        font-weight: 700;
    }   
`

const Price = styled.p`
    font-size: 24px;

    span {
        font-weight: 700;
    }
`

export const Result = ({result}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;
    return (
        <Container>
            <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Price>El precio es de: <span>{PRICE}</span></Price>
                <Text>El precio mas alto del dia: <span>{HIGHDAY}</span></Text>
                <Text>El precio mas bajo del dia: <span>{LOWDAY}</span></Text>
                <Text>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
            </div>
        </Container>
    )
}
