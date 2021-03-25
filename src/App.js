import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder:true
        },
        {
            id:2,
            text:'Cloth Shopping',
            day: 'Feb 6th at 2:30pm',
            reminder:false
        },
        {
            id:3,
            text:'Groceries Shopping',
            day: 'Feb 7th at 2:30pm',
            reminder:true
        },
    ]
)

const [showAddTask, setShowAddTask] = useState(false)

// Add Task

const addTask = (task) =>{
  const id = Math.floor(Math.random() *1000) + 1
  const newTask = {id, ...task}
  setTasks(()=>[...tasks, newTask])
}

// Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=>
      task.id === id? {
        ...task,
        reminder: !task.reminder,
      } : task
    )
  )
}

  return (
    <div className="container">
      <Header title="Task Manager" showAdd={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ) : ( 'No Task To Show')
      }
      
    </div>
  );
}

export default App;
