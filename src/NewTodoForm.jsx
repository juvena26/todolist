import { useState } from "react";
// props passed here should be the same name called in App.jsx
export function NewTodoForm(props) {
  props.addTodo;
  const [newItem, setNewItem] = useState(" ");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === " ") return;
    props.addTodo(newItem);
    setNewItem(" ");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add to list</button>
    </form>
  );
}
