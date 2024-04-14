import { useTasks } from "../hooks/useTasks";
import { Task } from "./Task";

export const TaskList = (props) => {
    const { list } = props;
    const { tasks, isEditing, addOrEditTask, editTask, deleteTask } = useTasks({list});
    
    return (
        <div>
            <input type="text" id="title" placeholder="Add the name of new task" />
            <input type="text" id="description" placeholder="Add the description of new task" />
            <button onClick={addOrEditTask}>{isEditing ? 'Update Task' : 'Add Task'}</button>
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        title={task.task}
                        description={task.description}
                        isCompleted={task.isCompleted}
                        onEdit={() => editTask(index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
};