export const Task = (props) => {
    const { text, isCompleted } = props

    return (
        <li>
            <input type="checkbox" defaultChecked={isCompleted} />
            <span>{text}</span>
        </li>
        
    )
}