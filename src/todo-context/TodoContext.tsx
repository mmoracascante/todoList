import { useContext, createContext, useEffect, useState, ReactNode } from 'react'

import { todos } from '../DataMockup'
import { TodosType } from '../../types/Types'

interface Props {
    children: ReactNode;
}

// @ts-ignore
const TodoContext = createContext()

const TodoProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [filteredData, setFilteredData] = useState<TodosType[]>([])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            // setFilteredData(todos)
            setLoading(false)
        }, 1000)
    }, [])

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

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const addTodo = (task: string) => {

        const newTodo = {
            text: task,
            completed: false
        }

        setFilteredData([
            ...filteredData,
            newTodo
        ])
    }

    return (
        <TodoContext.Provider value={{
            deleteTask,
            completeTask,
            loading,
            searchTasks,
            completed,
            leftListTasks,
            searchValue,
            setSearchValue,
            showModal,
            setShowModal,
            handleShowModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }