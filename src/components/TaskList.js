import TaskForm from './TaskForm'
import '../css/TaskList.css'
import {useState} from 'react'
import Task from './Task'

function TaskList(){

    const [tasks, setTasks]= useState([]);

    const addTask = task =>{
        console.log("task added");
        console.log(task);
    }

    return(
        <>
            <TaskForm/>
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                        <Task text={task.text} 
                        completed={task.completed}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;