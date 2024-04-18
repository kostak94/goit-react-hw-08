import Contact from "../Contact/Contact";
import css from "../PhoneBook.module.css";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { selectFilteredContacts } from "../../redux/selectors";
import { selectIsError, selectIsLoading } from "../../redux/selectors";

const ContactList = () => {
  const filters = useSelector(selectFilters);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <h2>{isError}</h2>;
  } else if (!filteredContacts?.length && filters) {
    return <h2>Search query is not valid...</h2>;
  } else if (!filteredContacts?.length) {
    return <h2>No contacts yet...</h2>;
  }
  return (
    <ul className={css.list}>
      {filteredContacts?.map((item) => (
        <Contact key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ContactList;
