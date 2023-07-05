export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <input
        onChange={(e) => toggleTodo(id, e.target.checked)}
        type="checkbox"
        checked={completed}
      />
      <label>{title} </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
