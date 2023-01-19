import React from 'react'
import {BsTrash} from 'react-icons/bs'

const style = {
  liComplete: `p-4 flex justify-between bg-slate-400 my-2 capitalize line-through`,
  textComplete: `ml-2 cursor-pointer line-through`,
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li class='flex justify-between bg-slate-200 my-2 capitalize p-4' className={todo.completed ? style.liComplete : style.li}>
        <div className='row flex'>
            <input onChange={()=> toggleComplete(todo)} type="checkbox" name="" id="" checked={todo.completed ? 'checked' : ''} />
            <p onClick={()=> toggleComplete(todo)} class='ml-2 cursor-pointer' className={todo.completed ? style.textComplete : style.li}>{todo.text}</p>
        </div>
        <button className='cursor-pointer flex items-center hover:text-red-600'
        onClick={()=> deleteTodo(todo.id)}><BsTrash/></button>
    </li>
  )
}

export default Todo