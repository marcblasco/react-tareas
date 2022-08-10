import '../css/TaskForm.css'

function taskForm(props){
    return(
        <form className="task-form">
            <input className="task-input" type="text" placeholder="Write a task" name="text"/>
            <button className="task-button">Add task</button>
        </form>
    ); 
    
}

export default taskForm;