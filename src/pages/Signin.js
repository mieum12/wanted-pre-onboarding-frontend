import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { styled } from "styled-components";

export default function Signin() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [validEmail, setValidEmail] = useState(false);
  const navigation = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setValidEmail(value.includes("@"));
    }
    setInput({ ...input, [name]: value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/signin", {
        email: input.email,
        password: input.password,
      });

      if (response.status === 200) {
        //token
        const token = response?.data?.access_token;
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", true);

        alert("로그인 완료");
        console.log("email :", input.email);
        console.log("pw :", input.password);
        navigation("/todo");
      } else {
        alert("로그인 실패");
        console.log(response.data.error);
      }
    } catch (error) {
      alert("로그인 실패");
      console.error(error);
    }
  };

  return (
    <SigninWrapper>
      <h3>LOGIN PAGE</h3>
      <Form onSubmit={handleSignin}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            data-testid="email-input"
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleInput}
            required
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            data-testid="password-input"
            id="password"
            type="password"
            name="password"
            value={input.password}
            onChange={handleInput}
            required
          />
        </p>
        <button
          data-testid="signin-button"
          disabled={!validEmail || input.password?.length < 8}
        >
          로그인
        </button>
      </Form>
    </SigninWrapper>
  );
}

const SigninWrapper = styled.div`
  text-align: center;
  input {
    margin-left: 10px;
      border: none;
      border-radius: 20px;
      font-size: 20px;
    }
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
