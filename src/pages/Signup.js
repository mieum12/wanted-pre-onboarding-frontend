import { useState } from "react";
import { api } from "../api/api";
import { Form, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Signup() {
  const navigation = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [validEmail, setValidEmail] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setValidEmail(value.includes("@"));
    }
    setInput({ ...input, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/signup", {
        email: input.email,
        password: input.password,
      });

      if (response.status === 201) {
        alert("회원가입 완료");
        console.log("email :", input.email);
        console.log("pw :", input.pw);
        navigation("/signin");
      }

      // TODO: 이미 존재하는 회원 관리하기
      if (response.status === 400) {
        alert("이미 존재하는 회원입니다");
        const token = response?.data?.access_token;
        localStorage.setItem("token", token);
        navigation("/signup");
      }
    } catch (error) {
      alert("회원가입 실패");
      console.error(error);
    }
  };

  return (
    <SignupWrapper>
      <h3>SIGNUP PAGE</h3>
      <Form onSubmit={handleSignup}>
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
          data-testid="signup-button"
          type="submit"
          disabled={!validEmail || input.password?.length < 8}
        >
          회원가입
        </button>
      </Form>
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  text-align: center;
  input {
    margin-left: 10px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
  }
  button {
    color: white;
    background-color: #1e5085;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    border: none;
  }

  button:hover,
  button:active,
  button.active {
    background-color: #2669b0;
  }
`;
