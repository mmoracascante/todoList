import React from 'react'
import styled from 'styled-components'

interface TodoCounter {
  completed: number;
  leftListTasks: number;
}

const TodoCounter = ({ completed, leftListTasks }: TodoCounter) => {
  return (
    <>
      {completed === leftListTasks ?
        <TitleCounter>
          {`Has finalizado todas las tareas`}
        </TitleCounter>
        :
        <TitleCounter>
          {`Has completado ${completed} de ${leftListTasks} tareas`}
        </TitleCounter>

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