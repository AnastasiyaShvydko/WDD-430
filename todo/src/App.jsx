//import { useState } from 'react'
import { useEffect, useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./NewToDoForm";
//import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";


export default function App() {

  const [item, setItem] = useState('');
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("TODOS");
    return localValue ? JSON.parse(localValue) : false;
  });


  useEffect(()=>{localStorage.setItem("TODOS", JSON.stringify(todos))}, [todos])

  function handleSubmit(e){
    e.preventDefault()
    if(!item==''){
    setTodos((currentTodos) =>{
      return [
       ...currentTodos,
      {id: crypto.randomUUID(),title:item,completed:false}]
    })
    setItem('')}
   else{ alert( "Enter todo")}
    //{todos.length === 0 && "No ToDos"}
    

  }

  function handleDelete(id){
    console.log(id)
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    // todos.filter(todo => {
    //   if (todo.id === id){

    //   }
    })
   }

  function toggleTodo(id,completed){
    setTodos(currentTodos => {
        return currentTodos.map(todo =>{
          if(todo.id === id){
            return {...todo, completed}
          }
          return todo
        }

        )
    })



  }



  return <>
  <NewToDoForm handleSubmit={handleSubmit} item={item} setItem={setItem}/>
  <h1 className="header">TODO List</h1>
  <ToDoList handleDelete = {handleDelete} toggleTodo = {toggleTodo} todos = {todos}/>
  {/* <ul className="list">
    {todos.length === 0 && "No ToDos"}
    {todos.map((todo) => {
      return <ToDoItem {...todo} key={todo.id} handleDelete = {handleDelete} toggleTodo = {toggleTodo} /> })}
    
    
  </ul> */}
  </>
    
}


