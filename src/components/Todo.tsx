import React, {
  useState
} from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

import TodoForm from "./TodoForm.tsx";

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    name: ''
  });

  const submitUpdate = (newValue): void => {
    editTodo(edit.id, newValue);

    setEdit({
      id: null,
      name: ''
    });
  }

  return todos.map((todo, index) => {
    return edit.id !== null && todo.id === edit.id
    ? <TodoForm
        edit={edit}
        onSubmit={submitUpdate}
      />
    : (
      <div
        className={
          todo.isComplete
            ? 'todo-row complete'
            : 'todo-row'
        }
        key={index}
        title="Tap double click to complete"
      >
        <div
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
        >
          { todo.name }
        </div>

        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({
              id: todo.id,
              name: todo.name
            })}
            className="edit-icon"
          />
        </div>
      </div>
    )
  })
}

export default Todo
