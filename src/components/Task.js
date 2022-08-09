
import '../css/Task.css' 
import { AiOutlineDelete } from "react-icons/ai";


function Task({text, completed}){
    return(
        <div className={completed ? 'task-container completed' : 'task-container' }>
            <div className="task-text">
                {text}
            </div>
            <div className="task-container-icon">
                <AiOutlineDelete className="task-icon"/>
            </div>
        </div>

    );
}

export default Task;