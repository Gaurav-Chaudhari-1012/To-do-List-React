import React, { useState } from 'react';
import './global.css'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';


const App = () => {
const [state, setState] = useState({
  item: [],
  course: "",
  trainer:"",
  id: uuidv4()
})

 let handleChange = (e) => {
  let {name,value} = e.target;
  setState({...state,[name]: value})
 }

 let handleSubmit = (e) => {
  e.preventDefault();
  try {
    let newItem = {
      id: state.id,
      course: state.course,
      trainer: state.trainer
    }
    console.log(state);
    let finalItem = [...state.item,newItem]

    setState({
      item: finalItem,
      id: uuidv4(),
      course:"",
      trainer:"",
    })

  } catch (error) {
    console.log(error);
  }
 }

 let handleDelete = (id)=>{
  let filteredItem = state.item.filter(item=>item.id!==id)
  setState({...state, item: filteredItem})
 }

 let handleUpdate = (id) => {
  let restItems = state.item.find((item)=>item.id===id)
  let selectedItem = state.item.find((item)=>item.id===id)
  setState({
    ...state,
    items: restItems,
    course:selectedItem.course,
    trainer:selectedItem.trainer
  })
 }

  return (
    <article className='mainContainer'>
      <header>
        <h1>To Do List</h1>
      </header>
      <main className='formlistContainer'>
      <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <TodoList items={state.item} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      </main>
    </article>
  )
}

export default App
