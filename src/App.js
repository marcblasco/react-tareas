import './App.css';
import freeCodeCampLogo from './img/freecode.png'; 
import TaskList from './components/TaskList';



function App() {
  return (
    <div className='aplication-tasks'>
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' />
      </div>
      <div className='tasks-list'>
        <h1>My Tasks</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
