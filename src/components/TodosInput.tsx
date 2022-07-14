import React, { useState } from 'react'


interface ITodosInputProps  {
  onClick: (value:string) => void
}



export const TodosInput = ({onClick}: ITodosInputProps) => {
  const [text, setText] = useState("")
  const changeHandler: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    setText(e.target.value)
  }

  const handleAdd: React.MouseEventHandler<HTMLButtonElement>  = () => {
    onClick(text)
  }

   
  return (
    <div> 
      <input type="text" placeholder='Enter todos here....' value={text}  onChange={changeHandler}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
