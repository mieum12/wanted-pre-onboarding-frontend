import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/signin">로그인</NavLink>
          </li>
          <li>
            <NavLink to="/signup">회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/todo">투두리스트</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
