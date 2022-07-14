import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { TodosInput } from './TodosInput'
import { TodosItem } from './TodosItem'
import axios from 'axios'

  export interface ITodositem {
  id:number,
  title:string,
  status:boolean
}


export const Todos = () => {

  const [todos, setTodos] = useState<ITodositem[]>([])
  const handleAdd = (title:string) => {
    const payload = {
      title, status:false, id:todos.length+1
    }
   // setTodos([...todos, payload])
   axios.post("http://localhost:8080/todos", payload).then(getTodos)
  }

  const getTodos = () => {
  axios.get("http://localhost:8080/todos").then(response => {
    const {data} = response;
    setTodos(data)
  })
  }



  useEffect(() => {
    getTodos()
  }, [])



  return (
    <div>
    <Header label='Todos'/>
    <TodosInput onClick = {handleAdd} />

    {
      todos.length > 0 && todos.map((e) => {
       return <TodosItem key={e.id}{...e} />
      })
    }
    </div>
  )
}
