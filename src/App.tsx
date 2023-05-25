import { useContext, useEffect, SetStateAction, Dispatch } from 'react';
import Hello from './components/hello/Hello';
import TodoCounter from './components/todo-counter/TodoCounter';
import TodoSearch from './components/todo-search/TodoSearch';
import TodoItem from './components/todo-item/TodoItem';
import TodoList from './components/todo-list/TodoList';
import CreateButton from './components/create-button/CreateButton';
import Loading from './components/loading/Loading';
import TodoModal from './components/modal/TodoModal';
import TodoForm from './components/todo-form/TodoForm';
import { TodosType, TypeProps } from '../types/Types'
import { TodoContext } from './components/todo-list/todo-context/TodoContext';




const App = () => {

  const {
    deleteTask,
    completeTask,
    loading,
    searchTasks,
    searchValue,
    setSearchValue,
    showModal,
    setShowModal } = useContext(TodoContext) as TypeProps

  return (
    <>
      <TodoCounter />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading ? <Loading message='Cargando' /> :
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
      {showModal && (
        <TodoModal>
          <TodoForm />
        </TodoModal>
      )}
    </>
  );
}

export default App;

