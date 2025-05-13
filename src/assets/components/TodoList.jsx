import { useState, useRef } from "react"

export default function TodoList(){
    const [todoTasks, setTodoTasks] = useState([]);
    const [task, setTask] = useState("");
    const emptyTask = useRef(null);
    const handleTaskChange = (e) =>{
        setTask(e.target.value);
    }
    const insertTask = () => {
       
        if(!task.trim()){
            // emptyTask.classList.remove('d-none');
            // emptyTask.classList.add('d-block');
        }
        else{
            setTodoTasks([...todoTasks,task]);
            setTask("");
        }
        

    }
    return(
        <>
        <div className="container-fluid bg-primary w-100 justify-content-center">
            <h1 className="display-1 mb-5 text-center border-1">Todo List</h1>
        </div>
        <div className="input-group mb-3 ms-5 justify content-center w-75">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                    <i className="bi bi-list-check text-primary fs-3"></i>
                </span>
            </div>
        <input type="text" className="form-control w-25 d-inline" aria-label="Default" value={task} onChange={handleTaskChange} aria-describedby="inputGroup-sizing-default"/>
        <button className="btn btn-outline-primary rounded-0 lead-3" onClick={insertTask}>Add Task</button>
        </div>
        <div id="emptyTask" className="d-none text-danger lead-1">task is empty</div>
        <div id="todoTasks" className="container-fluid m-5 shadow bg-light">
            <h2 className="display-3">Tasks</h2>
            <div className="d-flex align-items-center">
                {
                todoTasks.map((task,index) =>
                    (   <div key={index} className="border-bottom rounded-2">
                        <button className="btn btn-outline-success d-flex-inline align-items-center justify-content-center"><i className="bi bi-check2 fs-6"></i></button>    
                        <h2 className="my-3 rounded-0 display-6">{task}</h2>
                            
                        </div>
                    )
                )
                }
            </div>
                
        </div>
        <div ref={emptyTask} className="container-fluid m-5 shadow bg-light">
            <h2 className="display-3">Tasks</h2>
            <ul>
                <li>task1</li>
                <li>task1</li>
                <li>task1</li>
                <li>task1</li>
            </ul>
        </div>
        </>
    )
}