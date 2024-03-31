import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { Task } from './components/Task'

function App() {
  const taskList = [
    { task : 'Buy a new gaming laptop', isCompleted : false },
    { task : 'Complete a previous task', isCompleted : true },
    { task : 'Create a new portofolio site', isCompleted : false },
  ]

  return (
    <div>
      <Header />
      <TaskList list={taskList} />
    </div>

  )
}

export default App
