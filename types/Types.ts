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