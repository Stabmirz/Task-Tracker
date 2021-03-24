import { useState } from 'react';

const Tasks = () =>{
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
                text:'cloth Shopping',
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
    return (
        <>
            {tasks.map((task) => {
                <h3 key={task.id}>{task.text}</h3>
            })}
        </>
    )
}

export default Tasks;
