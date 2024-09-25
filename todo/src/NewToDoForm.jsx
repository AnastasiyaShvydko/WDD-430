


function NewToDoForm({handleSubmit = Function.prototype , item, setItem}){



    return <form onSubmit={(e) => {handleSubmit(e)}} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"></label>
        <input 
          type="text" 
          id="item"
          value={item}
          onChange={e=>setItem(e.target.value)}
          />
      
    </div>
    <button className="btn">Add</button>
  </form>

}
export {NewToDoForm}