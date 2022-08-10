import '../css/TaskForm.css'
import { useState } from 'react'


function TaskForm(props){

    const [input, setInput]= useState('');


    const handleChange = e =>{
        setInput(e.target.value)
    } 

   const handleShipping = e =>{
    const newTask = {
       id: '34545',
       text:  'Halo'
    }
   }



    return(
        <form className="task-form">
            <input className="task-input" type="text" placeholder="Write a task" name="text" onChange={handleChange}/>
            <button className="task-button">Add task</button>
        </form>
    ); 
    
}

export default TaskForm;