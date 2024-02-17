import React from 'react'

export default function Buttons({name,action,item}) {
  return (
   <button onClick={()=>action(item.id)}>{name}</button>
  )
}
