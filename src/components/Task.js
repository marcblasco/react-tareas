
import '../css/Task.css' 

function Task({text}){
    return(
        <div className="task-container">
            <div className="task-text">
                {text}
            </div>
            <div className="task-icon">
                Delete
            </div>
        </div>

    );
}

export default Task;