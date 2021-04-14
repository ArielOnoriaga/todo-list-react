import {
  useState,
  ReactElement,
} from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (): ReactElement => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const isInvalidName = ({ name }: Todo): boolean => {
    const todoNameValidator = /^\s+$/;

    return !name || todoNameValidator.test(name);
  }

  const addTodo = (todo: Todo): void => {
    if(isInvalidName(todo))
      return;

    const newTodos: Todo[] = [...todos, todo];
    setTodos(newTodos);
  }

  const completeTodo = (todoId: number): void => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === todoId)
        todo.isComplete = true;

      return todo;
    });

    setTodos(updatedTodos);
  };

  const removeTodo = (todoId: number): void => {
    const updatedTodos = [...todos]
      .filter(todo => todo.id !== todoId);

    setTodos(updatedTodos);
  };

  const editTodo = (todoId: number, newValue: Todo): void => {
    if(isInvalidName(newValue)) return;

    setTodos(previusTodos =>
      previusTodos.map(todo =>
          todo.id === todoId
            ? newValue
            : todo
      )
    );
  }

  return (
    <>
      <h1>
        What's the Plan for Today
      </h1>

      <TodoForm onSubmit={addTodo} />

      {
        todos.map((todo: Todo, index: number) =>
          <Todo
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        )
      }
    </>
  )
}

export default TodoList;
