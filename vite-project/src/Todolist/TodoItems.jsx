import React from 'react';
import Buttons from './Buttons';
export const  TaskItems=({todolist,settask,settodolist})=>{
   function edit(id){
  const editdata= todolist.filter((items)=>items.id==id)
  settask({name:editdata[0].taskname,id:id})
   }
  function deleteitem(id)
  {
    const editdata= todolist.filter((items)=>items.id!=id)
  settodolist(editdata)
  }
   return(<ul>
  {
    todolist.map((item)=>{
        return(<li key={item.id}>{item.taskname} <Buttons name='edit' action={edit} item={item}/><Buttons name='Delete' action={deleteitem} item={item}/></li>)
    })
  }
    </ul>)
}
export const TodoItems=React.memo(TaskItems);
