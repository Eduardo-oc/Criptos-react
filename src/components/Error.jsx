import React from 'react';
import styled from '@emotion/styled';


const Div = styled.div`
    background-color: #4D2235;
    width: 98%;
    color: red;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    border-radius: 5px;
    border: 2px solid red;
    border-left: 8px solid red;
    text-align: center;
    padding: 5px 0;
    margin-top: 20px;
`

export const Error = ({children}) => {
    return (
            <Div>
                {children}
            </Div>
    )
}
