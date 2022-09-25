import {useState, useSyncExternalStore} from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator"; 

function App() {

  const [taskItems, setTasksItems] = useState([
        {name:'mi primera tarea', done: false},
        {name:'mi segunda tarea', done: false},
        {name:'mi tercera tarea', done: false},
  ])
  return (
    <div className="App">
      <TaskCreator />
      

      <table>
        <thead>
          <tr>
           <th>task</th>
          </tr>
        </thead>
        <tbody>
        {
       taskItems.map(task=> (
         <tr>
          {task.name}
          </tr>
           
           ))
        } 
        </tbody>
      </table>

      

    </div>
  );
}

export default App;
