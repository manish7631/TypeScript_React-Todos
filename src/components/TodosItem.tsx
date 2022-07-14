import React from 'react'
import { ITodositem } from './Todos'
 



export const TodosItem = ({id, title, status}: ITodositem) => {
  return (
    <div>
        <span>{title}</span>
     <span>{`${id}-${status}`}</span>
    
    </div>
  )
}
