import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
});

//todo API
export const createTodo = async (accessToken, todo) => {
  try {
    const res = await api.post(
      "/todos",
      { todo: JSON.stringify(todo) },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const createdTodo = res.data;
    console.log(createdTodo.id);
    return createdTodo;
  } catch (err) {
    console.log("createTodo의 error", err);
  }
};

export const getTodos = async (accessToken, todos) => {
  try {
    const res = await api.get("/todos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log("getTodos의 error", err);
  }
};

export const updateTodo = async (accessToken, checked) => {
  try {
    const res = await api.put(
      `/todos/${checked.id}`,
      {
        todo: JSON.stringify(checked.text),
        isCompleted: checked.isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log("updateTodo의 error", err);
  }
};

export const deleteTodo = async (accessToken, deleted) => {
  try {
    const res = await api.delete(`/todos/${deleted.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.log("deleteTodo의 error", err);
  }
};
