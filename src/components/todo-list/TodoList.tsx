import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode;
}

const TodoList = ({ children }: Props) => {
  return (
    <>
      <UlStyled>
        {children}
      </UlStyled>
    </>
  )
}

export default TodoList

const UlStyled = styled.ul`
    margin: 0;
  padding: 0 0 56px 0;
  list-style: none;
`