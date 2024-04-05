import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

function App() {
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

  return (
    <div>
      <Header />
      <TaskList list={taskList} />
    </div>

  )
}

export default App
