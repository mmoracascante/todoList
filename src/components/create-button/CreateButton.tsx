import React from 'react'
import styled from 'styled-components'

const CreateButton = () => {

  const handleClick = () => {
    console.log('Abrir modal')
  }

  return (
    <>
      <ButtonStyled
        onClick={handleClick}
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

  transform: rotate(0);
  transition: .3s ease;
	&:hover {
		transform: rotate(224deg);
	}
`