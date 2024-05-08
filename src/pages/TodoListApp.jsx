import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import TodoLists from '../component/TodolistComponent';

function TodoListApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getAllTodo();
  }, []);

  async function getAllTodo() {
    try {
      const response = await axios.get('https://cc17-assessment-api.onrender.com/v1/todo?userId=5');
      setTodos(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const createTodo = async () => {
    const data = { title: newTodo, staus: false };
    try {
      let response = await axios.post(
        'https://cc17-assessment-api.onrender.com/v1/todo?userId=5',
        data
      );
      console.log(data);
      setTodos([response.data.data, ...todos]);
      setNewTodo('');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=5`);
      getAllTodo();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id, updateTodo) => {
    try {
      await axios.patch(
        `https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=5`,
        updateTodo
      );
      const updateTodoList = [...todos];
      setTodos(updateTodoList);
      getAllTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="todo">
        <div className="rocketadd">
          <h1>TodoList</h1>
          <button onClick={createTodo}>🚀</button>
        </div>
        <div className="newtask">
          <h5>newtask</h5>
          <input value={newTodo} onChange={handleChangeTodo} />
        </div>
        <ul className="todo__list">
          {todos.map((todo) => (
            <TodoLists
              key={todo.id}
              todo={todo}
              deleteTodo={() => deleteTodo(todo.id)}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListApp;
