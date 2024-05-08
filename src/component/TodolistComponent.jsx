/* eslint-disable react/prop-types */
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function TodoLists({ todo, deleteTodo, updateTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [updateTodoText, setUpdateTodoText] = useState(todo.title || '');

  const handleClickEdit = () => {
    if (!isEdit) return setIsEdit(true);
    updateTodo(todo.id, { title: updateTodoText });
    setIsEdit(false);
  };
  const handleChangeTodoText = (event) => {
    setUpdateTodoText(event.target.value);
  };
  return (
    <li className="todo__item">
      {!isEdit ? (
        <p>{todo.title}</p>
      ) : (
        <input value={updateTodoText} onChange={handleChangeTodoText} />
      )}
      <button onClick={handleClickEdit}>Edit</button>
      <button onClick={deleteTodo}>X</button>
    </li>
  );
}

export default TodoLists;
