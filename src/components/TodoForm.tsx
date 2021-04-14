import {
  useState,
  useEffect,
  useRef,
  ReactElement,
} from 'react';

interface Props {
  onSubmit: Function;
  edit?: Todo;
}

const TodoForm = ({ onSubmit, edit }: Props): ReactElement => {
  const [input, setInput] = useState(edit?.name ? edit.name : '');

  const inputRef = useRef(null);

  useEffect((): void => {
    //@ts-ignore
    inputRef?.current?.focus();
  });

  const handlerSubmit = (evt: any): void => {
    evt.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input
    });

    setInput('');
  };

  const buttonDetail = {
    text: edit?.name ? 'Edit' : 'Add',
    input: edit?.name ? 'todo-input edit' : 'todo-input',
    button: edit?.name ? 'todo-button edit' : 'todo-button'
  };

  const handlerChange = (evt: any): void => {
    setInput(evt.target.value);
  }

  return (
    <form
      onSubmit={handlerSubmit}
      className="todo-form"
    >
      <input
        type="text"
        placeholder={buttonDetail.text}
        value={input}
        name="text"
        onChange={handlerChange}
        className={buttonDetail.input}
        ref={inputRef}
      />

        <button
          type="submit"
          className={buttonDetail.button}
        >
        { buttonDetail.text }
      </button>
    </form>
  )
};

export default TodoForm;
