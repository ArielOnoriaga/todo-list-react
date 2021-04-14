import React, {
  useState,
  useEffect,
  useRef,
} from 'react';

const TodoForm = ({ onSubmit, edit }) => {
  const [input, setInput] = useState(edit?.name ? edit.name : '');

  const inputRef = useRef(null);

  useEffect((): void => {
    inputRef.current.focus();
  });

  const handlerSubmit = (evt): void => {
    evt.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input
    });

    setInput('');
  };

  const handlerChange = (evt): void => {
    setInput(evt.target.value);
  }

  return (
    <form
      onSubmit={handlerSubmit}
      className="todo-form"
    >
      {
        edit
        ? (
          <>
            <input
              type="text"
              placeholder="Add todo"
              value={input}
              name="text"
              onChange={handlerChange}
              className="todo-input"
              ref={inputRef}
            />

              <button
                type="submit"
                className="todo-button"
              >
              Edit
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Add todo"
              value={input}
              name="text"
              onChange={handlerChange}
              className="todo-input"
              ref={inputRef}
            />

              <button
                type="submit"
                className="todo-button"
              >
              Add
            </button>
          </>
        )
      }
    </form>
  )
};

export default TodoForm;
