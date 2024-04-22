import { useTasks } from "../hooks/useTasks";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

export const TaskList = (props) => {
    const { list } = props;
    const { tasks, isEditing, addOrEditTask, editTask, deleteTask, handleCheck } = useTasks({ list });

    return (
        <div>
            <TaskForm addOrEditTask={addOrEditTask} isEditing={isEditing} />
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        title={task.task}
                        description={task.description}
                        isCompleted={task.isCompleted}
                        onEdit={() => editTask(index)}
                        onDelete={() => deleteTask(index)}
                        onCheck={() => handleCheck(index)}
                    />
                ))}
            </ul>
        </div>
    );
};