import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <div>
        <Link to="/">Logo</Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div>
        {!isLoggedIn ? (
          <ul>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Registration</NavLink>
            </li>
          </ul>
        ) : (
          <button type="button">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
