import { useState, useRef } from "react"
import TodoTasks from "./TodoTasks";
import DoneTasks from "./DoneTasks";
export default function TodoList(){
    const [todoTasks, setTodoTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [task, setTask] = useState("");
    const emptyTask = useRef(null);
    const handleTaskChange = (e) =>{
        setTask(e.target.value);
    }
    const insertTask = () => {
        if(!task.trim()){
            emptyTask.current.classList.remove('d-none');
            emptyTask.current.classList.add('d-block');
        }
        else{   
            emptyTask.current.classList.remove('d-block');
            emptyTask.current.classList.add('d-none');
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
        <div ref={emptyTask} className="d-none text-danger lead-1 text-center font-weight-bold fs-3">task is empty</div>
        
        <TodoTasks todoTasks={todoTasks} setTodoTasks={setTodoTasks} doneTasks={doneTasks} setDoneTasks={setDoneTasks} />
        
        <DoneTasks todoTasks={todoTasks} setTodoTasks={setTodoTasks} doneTasks={doneTasks} setDoneTasks={setDoneTasks}/>
        </>
    )
}