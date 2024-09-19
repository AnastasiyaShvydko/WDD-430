// eslint-disable-next-line react/prop-types
export function ToDoItem({id,checked,title, handleDelete = Function.prototype, toggleTodo = Function.prototype}){
    return <li > 
    <label>
      <input 
      type="checkbox" 
      checked={checked}
      onChange={e => toggleTodo(id, e.target.checked)}/>
      {title}
    </label>
    <button className="btn btn-danger" onClick={()=>{handleDelete(id)}}>Delete</button>
  </li>
 
}