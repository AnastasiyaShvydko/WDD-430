// eslint-disable-next-line react/prop-types
export function ToDoItem({id,completed,title, handleDelete = Function.prototype, toggleTodo = Function.prototype}){
    return <li key = {id}> 
    <label>
      <input 
      type="checkbox" 
      checked={completed}
      value={title}
      onChange={(e) => {toggleTodo(id, e.target.checked)
        console.log(e.target.checked)
      }}/></label>
      {title}
    
    <button className="btn btn-danger" onClick={()=>{handleDelete(id)}}>Delete</button>
  </li>
 
}