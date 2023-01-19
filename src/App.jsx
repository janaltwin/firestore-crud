import React,{useEffect, useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from "./Todo";
import {db} from './firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input === ''){
      alert('Please enter valid input')
      return
    }
    await addDoc(collection(db,'todo-list'), {
      text: input,
      completed: false,
    })
    setInput('')
  }

  useEffect(()=>{
    const q = query(collection(db, 'todo-list'))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      let todosArr = []
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(), id: doc.id})
    })
    setTodos(todosArr)
    })
    return () => unsubscribe()
  },[])

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todo-list', todo.id),{
      completed: !todo.completed
    })
  }

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todo-list', id))
  }
  

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <div className="container bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl px-4">
        <h3 className="heading text-3xl font-bold text-center text-gray-800 p-2">TODO APP</h3>
        <form onSubmit={createTodo} className="form flex justify-between" action="">
          <input className="input border p-2 w-full text-xl" 
            type="text" 
            placeholder="Add Todo" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} />
          <button className="button border p-4 ml-2 bg-green-400 hover:bg-green-600 rounded-md text-slate-100"><AiOutlinePlus size={25}/></button>
        </form>
        <ul className="text-xl py-2">
          {todos.map((todo, index)=>(
              <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
