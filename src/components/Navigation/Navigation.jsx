import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "../PhoneBook.module.css";


const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  return (
    <div className={css.navbar}>
      <Link className={css.logo} to="/">Phonebook</Link>
      <p>{ user.name}</p>
        <ul>
            <NavLink to="/">Home</NavLink>
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Registration</NavLink>
            </li>
          </>
        )} { isLoggedIn && (
          <button className={css.btn} type="button" onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
        </ul>
    </div>
  );
};

export default Navigation;
