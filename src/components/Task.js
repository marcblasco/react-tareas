
import '../css/Task.css' 
import { AiOutlineDelete } from "react-icons/ai";


function Task({id,text, completed, taskCompleted, taskDeleted}){
    return(
        <div className={completed ? 'task-container completed' : 'task-container' }>
            <div className="task-text" onClick={() => taskCompleted(id)}>
                {text}
            </div>
            <div className="task-container-icon" onClick={() => taskDeleted(id)}>
                <AiOutlineDelete className="task-icon"/>
            </div>
        </div>

    );
}

export default Task;