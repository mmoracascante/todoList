import React from 'react'
import styled from 'styled-components';
import { LoadingProps } from '../../../types/Types';

const Loading = ({ message }: LoadingProps) => {
    return (
        <ContainerMessage>
            <h4>{`${message}...`}</h4>
        </ContainerMessage>
    )
}

export default Loading


const ContainerMessage = styled.div`
    width: 495px;
    display: flex;
    justify-content: center;
`