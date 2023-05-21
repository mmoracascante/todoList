import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import Hello from './components/hello/Hello';
import TodoCounter from './components/todo-counter/TodoCounter';
import TodoSearch from './components/todo-search/TodoSearch';
import TodoItem from './components/todo-item/TodoItem';
import TodoList from './components/todo-list/TodoList';
import CreateButton from './components/create-button/CreateButton';
import { text } from 'stream/consumers';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso intro a React', completed: false },
  { text: 'Caminar con Samito', completed: false },
]


// localStorage.setItem('List', JSON.stringify(todos))

interface TodosType {
  text: string;
  completed: boolean
}

const App = () => {
  // const localStorageTodos = localStorage.getItem('List')
  // let parsedTodos;
  // if (!localStorageTodos) {
  //   localStorage.setItem('List', JSON.stringify([]))
  //   parsedTodos = []
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos)
  // }

  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(todos)

  const completed = filteredData.filter((task: TodosType) => (task.completed)).length
  const leftListTasks = filteredData.length

  const searchTasks = filteredData.filter((item: TodosType) => {
    const itemText = item.text.toLowerCase()
    const searchtext = searchValue.toLowerCase()
    return itemText.includes(searchtext)
  })

  const completeTask = (task: TodosType) => {

    if (task.completed) {
      task.completed = false
      setFilteredData([...filteredData])
    } else {

      const listIndex = filteredData.findIndex((item: TodosType) => item.text === task.text)
      const newList = [...filteredData]
      newList[listIndex].completed = true
      setFilteredData(newList)
    }

  }

  const deleteTask = (text: string) => {

    const newList = filteredData.filter((item: TodosType) => item.text !== text)
    setFilteredData(newList)
  }

  return (
    <>
      <TodoCounter completed={completed} leftListTasks={leftListTasks} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          searchTasks.map((item: TodosType) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              completeTask={() => completeTask(item)}
              deleteTask={() => deleteTask(item.text)}
            />
          ))
        }
      </TodoList>
      <CreateButton />
    </>
  );
}

export default App;

