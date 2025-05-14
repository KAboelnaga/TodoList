

export default function TodoTasks({todoTasks, setTodoTasks, doneTasks, setDoneTasks}){
        const markDone = (index, action) => {
        if (action === 'check'){
            setDoneTasks([...doneTasks, todoTasks[index]]);
            const newTodo = [...todoTasks];
            newTodo.splice(index, 1);
            setTodoTasks(newTodo);
        }
        else if(action === 'delete'){        
            const newTodo = [...todoTasks];
            newTodo.splice(index, 1);
            setTodoTasks(newTodo);
        }
    }
    return(
        <>
        <div className="container-fluid m-5 shadow bg-light">
            <h2 className="display-3 text-primary">To Do Tasks</h2>
            {
            todoTasks.length > 0 &&
            todoTasks.map((task,index) =>
                (   
                    <div className="d-block" key={index}>
                        <div className="border-bottom rounded-2 d-flex align-items-center tasks">
                            <button className="btn btn-outline-success" onClick={() => markDone(index, 'check')}><i className="bi bi-check2 fs-6"></i></button>   
                            <span className="my-3 rounded-0 display-6 ms-3 w-75" style={{wordWrap: 'break-word'}}>{task}</span>
                            <button className="btn btn-outline-danger d-flex-end" onClick={() => markDone(index, 'delete')}><i className="bi bi-trash fs-6"></i></button>    
                        </div>
                    </div>
                )
            ) 
            }               
        </div>
        </>
    )
}