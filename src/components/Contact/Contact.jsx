import { HiPhone } from "react-icons/hi2";
import toast from "react-hot-toast";
import { HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import css from "../PhoneBook.module.css";
import { formatPhoneNumber } from "../../helpers/formatPhoneNum";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id))
      .unwrap()
      .then(() => {
        toast.error("Contact was deleted!");
      });
  };
  const options = {
    title: "Deleting confirmation",
    message: "Are you sure you want to delete this contact?",
    buttons: [
      {
        label: "Delete",
        onClick: handleDelete,
      },
      {
        label: "Cancel",
      },
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypress: () => {},
    onKeypressEscape: () => {},
    overlayClassName: "overlay-custom-class-name",
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
      <button
        className={css.btn}
        onClick={() => confirmAlert(options)}
        type="button"
      >
        Edit
      </button>
      <button
        className={css.btn_delete}
        onClick={() => confirmAlert(options)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
