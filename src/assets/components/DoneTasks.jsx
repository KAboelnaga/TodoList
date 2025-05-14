export default function DoneTasks({todoTasks, setTodoTasks, doneTasks, setDoneTasks}){
    const markDone = (index, action) => {
        if (action === 'uncheck'){
            setTodoTasks([...todoTasks,doneTasks[index]]);
            const newDone = [...doneTasks];
            newDone.splice(index, 1);
            setDoneTasks(newDone);
        }
        else if(action === 'delete'){
            const newDone = [...doneTasks];
            newDone.splice(index, 1);
            setDoneTasks(newDone);
        }
    }
    return(
        <div className="container-fluid m-5 shadow bg-light">
            <h2 className="display-3 text-success">Done Tasks</h2>
            {
            doneTasks.length > 0 &&
            doneTasks.map((task,index) =>
                (   
                    <div className="d-block" key={index}>
                        <div className="border-bottom rounded-2 d-flex align-items-center tasks">
                            <button className="btn btn-success" onClick={() => markDone(index, 'uncheck')}><i className="bi bi-check2 fs-6"></i></button>    
                            <span className="my-3 rounded-0 display-6 ms-3 w-75 text-muted " style={{wordWrap: 'break-word'}}>{task}</span>
                            <button className="btn btn-outline-danger d-flex-end" onClick={() => markDone(index, 'delete')}><i className="bi bi-trash fs-6"></i></button>
                        </div>
                    </div>
                )
            ) 
            } 
        </div>
    )
}