import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Form} from './components/Form.jsx';
import { Result } from './components/Result.jsx';
import { Spinner } from './components/Spinner.jsx';

import ImgaenCripto from './img/imagen-criptos.png';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    colum-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: lato, sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {

  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(Object.keys(coins).length > 0){
      const quoteCripto = async () => {
        setLoading(true);
        const {coin, criptoCoin} = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`;
        const resp = await fetch(url);
        const finalResp = await resp.json();

        setResult(finalResp.DISPLAY[criptoCoin][coin]);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }

      quoteCripto();
    }
  }, [coins])

  return (
    <Contenedor>
      <Imagen 
        src={ImgaenCripto}
        alt="Imagen cripto"
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form
          coins={coins}
          setCoins={setCoins}
        />
        {loading && <Spinner />}
        {result.PRICE && !loading && <Result result={result} />}
      </div>
    </Contenedor>
  )
}

export default App
