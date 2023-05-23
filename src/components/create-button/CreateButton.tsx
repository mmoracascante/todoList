import React, { useContext } from 'react'
import { TodoContext } from '../../todo-context/TodoContext'
import { TypeProps } from '../../../types/Types'
import styled from 'styled-components'

const CreateButton = () => {

  const { handleShowModal } = useContext(TodoContext) as TypeProps

  return (
    <>
      <ButtonStyled
        onClick={() => handleShowModal()}
      >+</ButtonStyled>
    </>
  )
}

export default CreateButton

const ButtonStyled = styled.button`
  background-color: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  z-index: 1;

  transform: rotate(0);
  transition: .3s ease;
	&:hover {
		transform: rotate(224deg);
	}
`