import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export interface TodoCounterType {
    completed: number;
    leftListTasks: number;
}

export interface TodosType {
    text: string;
    completed: boolean
}

export interface TodoItemProps {
    text: string;
    completed: boolean;
    completeTask: () => void;
    deleteTask: () => void;
}

export interface LoadingProps {
    message: string;
}

export interface TodoSearchProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export interface TypeProps {
    deleteTask: (text: string) => void
    completeTask: (task: TodosType) => void
    loading: boolean
    searchTasks: TodosType[]
    completed: number
    leftListTasks: number
    searchValue: string
    setSearchValue: Dispatch<SetStateAction<string>>
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
    handleShowModal: () => void
    addTodo: (task: string) => void
}