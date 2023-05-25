import { useContext } from 'react'
import { TodoCounterType, TypeProps } from '../../../types/Types'
import { TodoContext } from '../todo-list/todo-context/TodoContext'
import styled from 'styled-components'

const TodoCounter = () => {
  const { completed, leftListTasks } = useContext(TodoContext) as TypeProps
  return (
    <>
      {leftListTasks === 0 ?
        <TitleCounter>
          {`Crea alguna tarea`}
        </TitleCounter>
        : completed < leftListTasks ?
          <TitleCounter>
            {`Has completado ${completed} de ${leftListTasks} tareas`}
          </TitleCounter>
          : leftListTasks === completed ?
            <TitleCounter>
              {`Has finalizado todas las tareas`}
            </TitleCounter>
            : null

      }
    </>
  )
}

export default TodoCounter

const TitleCounter = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;
`