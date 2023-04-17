import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Spin } from 'antd';
import styled, { keyframes } from 'styled-components';
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledLoadingSpinner = styled(Spin)`
       padding: 4px;
       svg{
        animation:${rotate360} linear 1s infinite;
       }
`
export default function LoadingSpinner(props) {
    return (

        <StyledLoadingSpinner indicator={<AiOutlineLoading3Quarters color={props.color} />} />
    )
}
