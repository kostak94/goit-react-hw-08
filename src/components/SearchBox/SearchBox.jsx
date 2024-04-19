import css from "../PhoneBook.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const SearchBox = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          value={filters}
        />
      </label>
    </div>
  );
};

export default SearchBox;
