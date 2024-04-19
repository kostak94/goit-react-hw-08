import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header>
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
          <button type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navigation;
