import { TaskList } from '../components/TaskList';

export default function TasksPage() {

    const taskList = [

        {
            task: 'Buy a new gaming laptop',
            description: 'You need a new gaming laptop',
            isCompleted: false
        },
        {
            task: 'Complete a previous task',
            description: 'You accept the compromise',
            isCompleted: true
        },
        {
            task: 'Create a new portofolio site',
            description: 'Create a new portofolio site about IETI class',
            isCompleted: false
        },
    ]

    return < TaskList list = { taskList } />
}

