import { Link } from "react-router-dom";
import css from "../../components/PhoneBook.module.css";



const NotFound = () => {
  return (
    <div className={css.flexCenter2}>
			<h1>Page not found</h1>
			<Link to='/'>Go to homepage!</Link>
		</div>
  );
};

export default NotFound;
