import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  });

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
    console.log(todo);
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      {/* calling component NewTodoForm in app with the props addtodo(can be any name like on submit etc, here it is addTodo) to pass data between the app and the component */}
      <NewTodoForm addTodo={addTodo} />
      <h3 className="header">To Do</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
