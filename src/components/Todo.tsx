import {
  useState,
  ReactElement,
} from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

import TodoForm from "./TodoForm";

interface Props {
  todo: Todo;
  index: number;
  completeTodo: Function;
  removeTodo: Function;
  editTodo: Function;
}

const Todo = ({ todo, index, completeTodo, removeTodo, editTodo }: Props): ReactElement => {
  const [edit, setEdit] = useState<Todo>({
    id: null,
    name: ''
  });

  const submitUpdate = (newValue: Todo): void => {
    editTodo(edit.id, newValue);

    setEdit({
      id: null,
      name: ''
    });
  }

    return edit.id !== null && todo.id === edit.id
    ? <TodoForm
        edit={edit}
        onSubmit={submitUpdate}
      />
    : <div
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
}

export default Todo;
