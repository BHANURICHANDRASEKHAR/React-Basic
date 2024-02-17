import React, { useState,useReducer } from 'react'
import { TodoItems } from './TodoItems';
export const defaultvalue={
    name:'',
    id:''
}
export default function Main() {

    const [task,settask]=useState(defaultvalue);
    const [todolist,settodolist]=useState([]);

    const [notify,setnotify]=useState(false);
    function SubmitHandler()
    {
       if(task.name.trim()=='')
       {
        setnotify(true);
       }
       else{   
        const existdata=todolist.filter((items)=>items.id==task.id)
        console.log(task)
       if(existdata.length>0)
       {
       const index=todolist.indexOf(existdata[0]);
       todolist[index].taskname=task.name; 
       settodolist([...todolist])
       }
      else
      {
        settodolist([...todolist,{taskname:task.name,id:new Date().getMilliseconds()}]);
       
      }
      settask(defaultvalue)
      setnotify(false);
       }
    }
    return(<React.Fragment>
        <div>
        <h1>ToDo List</h1>
        <input type="text" value={task.name} onChange={(e)=>settask({...task,name:e.target.value})}/>
        <button onClick={SubmitHandler}>Submit</button>
        </div>
        {notify&&<p style={{color:'red'}}>Please Enter a Task</p>}<br/>
        <TodoItems todolist={todolist} settodolist={settodolist} settask={settask}/>
        </React.Fragment>)
}
