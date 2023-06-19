import React, { useState } from "react";
import { styled } from "styled-components";

export default function TodoList({ todo, onEdit, onCheck, onDelete }) {
  const { text, state } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    const state = e.target.checked ? "completed" : "active";
    onCheck({ ...todo, state });
  };

  //delete
  const handleDelete = () => {
    onDelete(todo);
  };

  //edit
  const handleEditCheck = () => {
    setIsEditing(true);
    setEditValue(text);
  };
  const handleEditInput = (e) => {
    setEditValue(e.target.value);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit({ ...todo, text: editValue });
    setIsEditing(false);
    setEditValue("");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <TodoListWrapper>
      {isEditing && (
        <li>
          <input
            type="checkbox"
            id={`checkbox-${text}`}
            onChange={handleChange}
            checked={state === "completed"}
          />
          <input
            data-testid="modify-input"
            type="text"
            onChange={handleEditInput}
            value={editValue}
          />
          <button data-testid="submit-button" onClick={handleEditSubmit}>
            저장
          </button>
          <button data-testid="cancel-button" onClick={handleCancel}>
            취소
          </button>
        </li>
      )}

      {!isEditing && (
        <li>
          <input
            type="checkbox"
            id={`checkbox-${text}`}
            onChange={handleChange}
            checked={state === "completed"}
          />
          <label
            htmlFor={`checkbox-${text}`}
            completed={state === "completed"}
            className={state === "completed" ? "completed" : ""}
          >
            <span>{text}</span>
          </label>
          <button data-testid="modify-button" onClick={handleEditCheck}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </li>
      )}
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.div`
  margin: 20px;
  label.completed {
    color: grey;
    text-decoration: line-through;
  }
  button {
    margin-left: 10px;
    color: white;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.5rem 0.5rem;
    border-radius: 20px;
    border: none;
    font-weight: bold;
  }

  button:hover,
  button:active,
  button.active {
    color: #f68084;
    background-color: white;
    cursor: pointer;
  }
`;
