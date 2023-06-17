import { useState } from "react";

import { NavLink, redirect, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function MainNavigation() {
  const navigation = useNavigate();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("token") || ""
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    redirect("/");
    return;
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
            <div onClick={handleLogout} className="logout">
              Logout
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
    color: white;
  }

  .list a:hover,
  .list a.active {
    color: white;
    font-weight: bold;
  }
  .logout {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;
  }
  .logout.active {
    color: #f68084;
    background-color: white;
    cursor: pointer;
  }
`;
