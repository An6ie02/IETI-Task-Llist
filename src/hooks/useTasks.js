import { useEffect, useState } from "react";

export function useTasks(params) {
    const { list } = params;
    const [tasks, setTasks] = useState(list);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    const addOrEditTask = () => {
        if (isEditing) {
            updateTask();
        } else {
            addTask();
        }
    }

    const addTask = () => {
        const newTask = getInformationTask();
        let newTasks = [...tasks]
        newTasks = [...newTasks, newTask];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
    const editTask = (taskIndex) => {
        const taskToEdit = tasks[taskIndex];
        document.getElementById("title").value = taskToEdit.task;
        document.getElementById("description").value = taskToEdit.description;
        setIsEditing(true);
        setCurrentTaskIndex(taskIndex);
    }

    const updateTask = () => {
        const newTask = getInformationTask();
        let newTasks = [...tasks]
        newTasks[currentTaskIndex] = newTask;
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        setIsEditing(false);
        setCurrentTaskIndex(null);
    }

    const deleteTask = (taskIndex) => {
        let newTasks = [...tasks]
        newTasks = newTasks.filter((task, index) => index != taskIndex);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    const getInformationTask = () => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const newTask = {
            task: title,
            description: description,
            isCompleted: false
        };
        return newTask;
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem("tasks");
        if (localStorageData) {
            const storedTasks = JSON.parse(localStorageData);
            setTasks(storedTasks);
        }
    }, []);

    return { tasks, isEditing, addOrEditTask, editTask, deleteTask };

}