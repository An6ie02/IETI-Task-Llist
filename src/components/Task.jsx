export const Task = (props) => {
    const { title, description, isCompleted, onEdit, onDelete, onCheck } = props

    return (
        <li>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
            <label>Completed</label>
            <input type="checkbox" checked={isCompleted} onChange={onCheck} />
        </li>
        
    )
}