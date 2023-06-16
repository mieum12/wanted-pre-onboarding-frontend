import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function MainNavigation() {
  const navigation = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("token") || ""
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigation("/");
  };

  return (
    <NavWrapper>
      <nav>
        <ul className="list">
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          {!accessToken && (
            <>
              <div>
                <NavLink to="signin">LOGIN</NavLink>
              </div>
              <div>
                <NavLink to="signup">SIGNUP</NavLink>
              </div>
            </>
          )}

          <div>
            <NavLink to="/todo">TODO LIST</NavLink>
          </div>
          {accessToken && (
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </ul>
      </nav>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  max-width: 60rem;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  .list {
    display: flex;
    gap: 1rem;
  }

  .list a {
    text-decoration: none;
    color: #1e5085;
  }

  .list a:hover,
  .list a.active {
    color: #1e5085;
    font-weight: bold;
  }

  .list button {
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
