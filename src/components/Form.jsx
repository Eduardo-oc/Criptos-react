import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useSelectCoins from '../hooks/useSelectCoins';
import {Error} from './Error.jsx';

import { monedas } from '../data/coins';


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
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


export const Form = ({coins, setCoins}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ coin, SelectCoins ] = useSelectCoins("Elige tu Moneda", monedas);
    const [ criptoCoin, SelectCriptoCoins ] = useSelectCoins("Elige tu Criptomoneda", criptos);

    useEffect(() => {
        const getAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const resp = await fetch(url);
            const finalResp = await resp.json();

            const arrayCriptos = finalResp.Data.map(cripto => {
                const {CoinInfo} = cripto;
                const {Name, FullName} = CoinInfo;

                const obj = {
                    id: Name,
                    name: FullName
                }

                return obj;
            });
            setCriptos(arrayCriptos);
        }

        getAPI();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if([coin, criptoCoin].includes("")){
            setError(true);
            return;
        }

        setError(false);
        setCoins({
            coin,
            criptoCoin
        });

    }

    if(error){
        setTimeout(() => {
            setError(false);
        }, 3000);
    }

    return (
        <form onSubmit={handleSubmit}>

            <SelectCoins />
            <SelectCriptoCoins />
            <InputSubmit 
                type="submit" 
                value="Cotizar"
            />
            {error && 
                <Error>
                    <p>Rellene todos los campos</p>
                </Error>
            }
        </form>
    )
}
