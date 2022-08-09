import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './img/freecode.png'; 
import Task from './components/Task';


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
        <Task text='Learn React'/>
      </div>
    </div>
  );
}

export default App;
