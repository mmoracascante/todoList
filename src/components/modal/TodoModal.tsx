import React, { ReactNode } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import styled from 'styled-components';

interface Props {
    children: ReactNode;
}


const TodoModal = ({ children }: Props) => {
    return createPortal(
        <Modal>
            {children}
        </Modal>,
        document.getElementById('modal') as HTMLElement)
}

export default TodoModal

const Modal = styled.div`
  background-color: rgba(32,35,41,.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`