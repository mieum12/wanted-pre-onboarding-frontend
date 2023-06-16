import React, { useState } from "react";
import { styled } from "styled-components";

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    onAdd({ text: value, isCompleted: false });
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputWrapper>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="new-todo-input"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  margin: 10px;
  input {
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
  }
  button {
    color: white;
    background-color: #1e5085;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    border: none;
  }

  button:hover,
  button:active,
  button.active {
    background-color: #2669b0;
  }
`;
