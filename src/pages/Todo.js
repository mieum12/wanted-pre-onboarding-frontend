import React, { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useNavigate } from "react-router-dom";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../api/api";
import { styled } from "styled-components";

export default function Todo() {
  const [todos, setTodos] = useState(() => getTodo());
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("token") || ""
  );

  const handleAdd = async (todo) => {
    try {
      const createdTodo = await createTodo(accessToken, todo);
      const newId = createdTodo.id;

      todo.id = newId;

      setTodos([...todos, todo]);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleDelete = (deleted) => {
    deleteTodo(accessToken, deleted);
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleCheck = (checked) => {
    updateTodo(accessToken, checked);
    setTodos(todos.map((todo) => (todo.id === checked.id ? checked : todo)));
  };

  const handleEdit = (edited) => {
    setTodos(
      todos.map((todo) =>
        todo.id === edited.id ? { ...todo, text: edited.text } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const navigate = useNavigate();

  useEffect(() => {
    const handleError = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    window.onerror = handleError;

    if (!accessToken) {
      window.location.href = "/signin";
      return;
    }
  }, [accessToken, navigate]);

  return (
    <TodoWrapper>
      <h3>MY TODO LIST</h3>
      <TodoInput onAdd={handleAdd} />
      <div>
        {todos.map((item) => (
          <TodoList
            key={item.id}
            todo={item}
            onEdit={handleEdit}
            onCheck={handleCheck}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </TodoWrapper>
  );
}

function getTodo() {
  const todos = localStorage.getItem("todos");
  getTodos(localStorage.getItem("access_token"), todos);
  return todos ? JSON.parse(todos) : [];
}

const TodoWrapper = styled.div`
  text-align: center;
  font-family: "Orbit", sans-serif;
  font-family: "Orbitron", sans-serif;
`;
