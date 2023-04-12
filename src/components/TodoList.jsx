import React from 'react';
export default function Form({ todas, setTodas, edittTodo, setEditetodo}) {

  const cheackHandler = (todo) => {
    setTodas(
      todas.map((items) => {
        if (items.id === todo.id) {
          return { ...items, completed: !items.completed };
        }
        return items;
      })
    );
  };

  const handlerEdit = ({ id }) => {
    const todoFind = todas.find((toda) => toda.id === id);
    setEditetodo(todoFind);
  };

  const deleteHandler = ({ id }) => {
    setTodas(todas.filter((toda) => toda.id !== id));
  };

  return (
    <div className="todo_list">
      {
       todas.map((toda) => (
        <li className="todo-list" key={toda.id}>
          <input
            type="text"
            value={toda.title}
            onChange={(event) => event.preventDefault()}
          />

          <div className="button_add">
            <button
              className="button_check task_button"
              onClick={() => cheackHandler(toda)}
            >
              <i class="fa-solid fa-check"></i>
            </button>
            <button
              className="button_edit task_button"
              onClick={() => handlerEdit(toda)}
            >
              <i class="fa-solid fa-pen"></i>
            </button>
            <button
              className="button_delete task_button"
              onClick={() => deleteHandler(toda)}
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
