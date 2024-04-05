import { Task } from "./Task";
import { useEffect, useState } from "react";

export const TaskList = (props) => {
    const { list } = props;
    const [tasks, setTasks] = useState(list);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

    const handleAddOrEditTask = () => {
        if (isEditing) {
            handleUpdateTask();
        } else {
            handleSaveTask();
        }
    }

    const handleSaveTask = () => {
        const newTask = getInformationTask();
        let newTasks = [...tasks]
        newTasks = [...newTasks, newTask];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    const handleEditTask = (taskIndex) => {
        const taskToEdit = tasks[taskIndex];
        document.getElementById("title").value = taskToEdit.task;
        document.getElementById("description").value = taskToEdit.description;
        setIsEditing(true);
        setCurrentTaskIndex(taskIndex);
    }

    const handleUpdateTask = () => {
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

    const handleDeleteTask = (taskIndex) => {
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

    return (
        <div>
            <input type="text" id="title" placeholder="Add the name of new task" />
            <input type="text" id="description" placeholder="Add the description of new task" />
            <button onClick={handleAddOrEditTask}>{isEditing ? 'Update Task' : 'Add Task'}</button>
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        title={task.task}
                        description={task.description}
                        isCompleted={task.isCompleted}
                        onEdit={() => handleEditTask(index)}
                        onDelete={() => handleDeleteTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
};