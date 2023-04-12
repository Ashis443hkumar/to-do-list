import React, { useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({
  input,
  setInput,
  todas,
  setTodas,
  edittTodo,
  setEditetodo,
}) {


  const updateTodo = (title, id, compelted) => {
    const newTodo = todas.map((todo) =>
      todo.id === id ? { title, id, compelted } : todo
    );
    setTodas(newTodo);
    setEditetodo('');
  };

  useEffect(() => {
    if (edittTodo) {
      setInput(edittTodo.title);
    } else {
      setInput("");
    }
  },[setInput, edittTodo]);



  const OnInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!edittTodo) {
      setTodas([...todas, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, edittTodo.id, edittTodo.completed);
    }
  };
  return (
      <form action="" onSubmit={onFormSubmit} className="text_form" >
      <input
        type="text"
        placeHolder=""
        value={input}
        required
        onChange={OnInputChange}
      />
      <button className="add_button" type="submit">
        Add
      </button>
    </form>
  );
}
