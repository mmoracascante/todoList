import React, { FC } from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled, { css } from 'styled-components';
import { TodoItemProps } from '../../../types/Types';


const TodoItem: FC<TodoItemProps> = ({ text, completed, completeTask, deleteTask }) => {

  return (
    <ListStyled completed={completed}>
      <IconStyled
        completed={completed}
        onClick={completeTask}
      >

        <AiOutlineCheckCircle />

      </IconStyled>
      <p>{text}</p>
      <IconDelete
        onClick={deleteTask}
      >

        <AiOutlineCloseCircle />

      </IconDelete>
    </ListStyled>
  )
}

export default TodoItem

const ListStyled = styled.li<{ completed: boolean }>`
  background-color: #FAFAFA;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  & p {
    margin: 24px 0 24px 24px;
    width: calc(100% - 120px);
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    text-decoration: ${props => props.completed ? 'line-through' : ''};
  }
`

const IconShareStyles = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 26px;
  font-weight: bold;
`
const IconStyled = styled.span<{ completed: boolean }>`
  ${IconShareStyles};
  color: ${props => props.completed ? '#4caf50' : ''};
  &:hover {
    color: #4caf50;
  }
`

const IconDelete = styled.span`
  ${IconShareStyles};
  
  display: flex;
  align-items: center;
  &:hover {
    color: red;
  }
`