import React, { useState } from "react";

export default function TodoList({ todo, onEdit, onCheck, onDelete }) {
  const { text, state } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    const state = e.target.checked ? "completed" : "active";
    onCheck({ ...todo, state });
  };

  const handleDelete = () => onDelete(todo);
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
    <div>
      <input
        type="checkbox"
        id={`checkbox-${text}`}
        onChange={handleChange}
        checked={state === "completed"}
      />
      {isEditing && (
        <>
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
        </>
      )}
      {!isEditing && (
        <>
          <label htmlFor={`checkbox-${text}`} completed={state === "completed"}>
            {text}
          </label>
          <button data-testid="modify-button" onClick={handleEditCheck}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </>
      )}
    </div>
  );
}
