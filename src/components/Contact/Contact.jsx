import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";

import css from "../PhoneBook.module.css";
import { formatPhoneNumber } from "../../assets/helpers/formatPhoneNum";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <li className={css.item}>
      <div className={css.flex_container}>
        <div className={css.flex}>
          <HiUser size={18} />
          <h3 className={css.name}>{item.name}</h3>
        </div>
        <div className={css.flex}>
          <HiPhone size={18} />
          <p>{formatPhoneNumber(item.number)}</p>
        </div>
      </div>
      <button className={css.btn_delete} onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
