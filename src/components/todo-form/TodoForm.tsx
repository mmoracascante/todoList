import React, { useContext, FormEvent, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { TodoContext } from '../../todo-context/TodoContext'

const TodoForm = () => {

	const {
		addTodo,
		showModal,
		setShowModal,
		handleShowModal
	}: any = useContext(TodoContext)

	const [newTodoValue, setnewTodoValue] = useState('')

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (newTodoValue !== '') {
			addTodo(newTodoValue)
			handleShowModal()
		}
	}

	const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const data = event.target.value
		setnewTodoValue(data)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				onChange={handleOnChange}
				placeholder='Añade una nueva tarea'
			/>
			<ContainerButtons>

				<button
					onClick={handleShowModal}
				>
					Cancelar
				</button>

				<button type='submit'>
					Añadir
				</button>

			</ContainerButtons>
		</Form>
	)
}

export default TodoForm

const Form = styled.form`
	width: 90%;
	max-width: 300px;
	background-color: #fff;
	padding: 33px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;	

& label {
	text-align: center;
	font-weight: bold;
	font-size: 20px;
	color: #1E1E1F;
	margin-bottom: 26px;
	}


& textarea {
  background-color: #F9FBFC;
  border: 2px solid #202329;
  border-radius: 2px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  color: #1E1E1F;
  font-size: 20px;
  text-align: center;
  padding: 12px;
  height: 96px;
  width: calc(100% - 25px);
}

& textarea::placeholder {
  color: #A5A5A5;
  font-family: 'Montserrat';
  font-weight: 400;
}

& textarea:focus {
  outline-color: #61DAFA;
}
`
const ContainerButtons = styled.div`
 margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & button {
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    color: #202329;
    font-weight: 400;
    width: 120px;
    height: 48px;
    border-radius: 2px;
    border: none;
    font-family: 'Montserrat';
  }
  & button:nth-child(1){
    background: transparent;
  }
  & button:nth-child(2){
    background: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  }
`