
export function NewToDoForm(props){
// eslint-disable-next-line react/prop-types
const {handleSubmit = Function.prototype , item, setItem} = props

    return <form onSubmit={handleSubmit} className="new-item-form">
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