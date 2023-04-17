import React from 'react'
import styled from 'styled-components'
const FormButtonDivider = styled.div`
position: relative;
color: black;
display: flex;
justify-content: center;
align-items:center;
margin: 32px 0;
background-color: white;
&::before{
    content: '';
    height: 1px;
    position: absolute;
    width: 100%;
    background-color: #d9d8d56e;
    left: 0;
}
&::after{
    content: 'Or';
    position: absolute;
    background-color: white;
    left: 50%;
    padding: 0 20px;
    transform: translate(-50%);
}
`
export default FormButtonDivider;