export default function AboutUsPage() {
    return (
        <div>
            <h2>About Us</h2>
            <p>The organization of tasks is one of the most important activities in people's daily 
                lives, since it allows them to keep track of the activities that must be carried out 
                in a given time. On many occasions, people forget the tasks they must perform, so it 
                is necessary to have a tool that allows you to keep track of pending tasks, know which 
                are completed and which are not, and be able to edit or delete tasks that are no longer 
                complete. They are necessary. This is the ToDo App tool that I offer to users, a web 
                application that will allow them to keep track of the tasks they must perform.</p>
            <h3>Features</h3>
            <ul>
                <li><b>Task creation</b>: Users can add tasks to the list, each task must have a title, description and a status of completed or pending.</li>
                <li><b>Task editing</b>: Users can modify the title and description of an existing task.</li>
                <li><b>Task deletion</b>: Users can remove a task from the list.</li>
                <li><b>Task completion</b>: Users can mark a task as completed</li>
            </ul>
        </div>
    )
}