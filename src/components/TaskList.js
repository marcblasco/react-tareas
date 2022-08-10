import TaskForm from './TaskForm'
import '../css/TaskList.css'
import {useState} from 'react'
import Task from './Task'

function TaskList(){

    const [tasks, setTasks]= useState([]);

    const addTask = task =>{
      if(task.text.trim()){
        task.text = task.text.trim();
        const updatedTasks =[task, ...tasks]
        setTasks(updatedTasks);
      }
    }

    const deleteTask = id =>{
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                        <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text} 
                        completed={task.completed}
                        taskDeleted={deleteTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;