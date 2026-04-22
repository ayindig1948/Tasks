import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import TaskForm from './Coponetes/TaskForm'
import TaskList from './Coponetes/TasksList'


function App() {
  const [Tasks, setTasks] = useState(()=>{
 return JSON.parse(localStorage.getItem('tasks')) || []
});
const deleteTask = (id) => {
  window.confirm('Are you sure you want to delete this task?') &&
  setTasks(Tasks.filter((task) => task.id !== id));
}
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(Tasks));
}, [Tasks]);
  return (
    <>
     <div className="max-w-lg mx-auto mt-10 bg-gray-100 p-6 rounded-lg shadow-lg"> 
    <h1 className=" text-3xl font-bold text-center pt-10 mb-4">Tasks App</h1>
    <p className="text-gray-700 text-center mb-6">Manage your tasks efficiently and stay organized.</p>
    <TaskForm Tasks={Tasks} setTasks={setTasks} />
    <TaskList Tasks={Tasks} deleteTask={deleteTask} />
    </div>
    <footer className="text-center text-gray-500 text-sm mt-6">
      &copy; 2026 <a href="https://github.com/ayindig1948" className="text-blue-500 hover:underline"> Ay Indig</a>. All rights reserved.
    </footer>
</>
  )
}

export default App
