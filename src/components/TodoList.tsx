import React, {
  useState
} from 'react';
import Todo from './Todo.tsx';
import TodoForm from './TodoForm.tsx';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const isInvalidName = ({ name }): boolean => {
    const todoNameValidator = /^\s+$/;

    return !name || todoNameValidator.test(name);
  }

  const addTodo = (todo): void => {
    if(isInvalidName(todo))
      return;

    const newTodos = [...todos, todo];
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

  const editTodo = (todoId, newValue): void => {
    if(isInvalidName(newValue)) return;

    setTodos(previusTodos => previusTodos.map(todo => todo.id === todoId ? newValue : todo));
  }

  return (
    <div>
      <h1>
        What's the Plan for Today
      </h1>

      <TodoForm onSubmit={addTodo} />

      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  )
}

export default TodoList;
