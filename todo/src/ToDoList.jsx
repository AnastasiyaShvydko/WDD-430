/* eslint-disable react/prop-types */
import { ToDoItem } from "./ToDoItem"

// eslint-disable-next-line react/prop-types
export function ToDoList({todos , handleDelete, toggleTodo}){
    return <ul className="list">
        {todos.length === 0 && "No ToDos"}
        {todos.map((todo) => {
  return <ToDoItem {...todo} key={todo.id} handleDelete = {handleDelete} toggleTodo = {toggleTodo} /> })}


</ul>
}