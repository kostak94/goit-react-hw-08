import { HiPhone } from "react-icons/hi2";
import toast from "react-hot-toast";
import { HiUser } from "react-icons/hi";
import { useDispatch } from "react-redux";
import "react-confirm-alert/src/react-confirm-alert.css";

import css from "../PhoneBook.module.css";
import { formatPhoneNumber } from "../../helpers/formatPhoneNum";
import { deleteContact } from "../../redux/contacts/operations";
import CustomModal from "../CustomModal/CustomModal";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { DeleteForever, Edit } from "@material-ui/icons";
import DeleteContactDialog from "./DeleteContactDialog";

const Contact = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(item.id))
      .unwrap()
      .then(() => {
        toast.error("Contact was deleted!");
      });
  };

  return (
    <li
    // className={css.item}
    >
      {/* <div className={css.flex_container}>
        <div className={css.flex}>
          <HiUser size={18} />
          <h3 className={css.name}>{item.name}</h3>
        </div>
        <div className={css.flex}>
          <HiPhone size={18} />
          <p>{formatPhoneNumber(item.number)}</p>
        </div>
      </div> */}
      <Card>
        <CardContent>
          <Typography variant="h6" component="span">
            <HiUser size={18} />
            {item.name}
          </Typography>
          <Typography variant="h5" component="p">
            <HiPhone size={24} />
            {formatPhoneNumber(item.number)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            // className={css.btn}
            variant="contained"
            size="small"
            color="primary"
            endIcon={<Edit />}
            type="button"
            onClick={() => setOpen(true)}>
            Edit
          </Button>
          <Button
            // className={css.btn_delete}
            onClick={() => setIsOpenDialog(true)}
            type="button"
            size="small"
            variant="contained"
            endIcon={<DeleteForever />}
            style={{ marginRight: 10 }}
            color="secondary">
            Delete
          </Button>
        </CardActions>
      </Card>

      <CustomModal
        onClose={() => setOpen(false)}
        isOpen={isOpen}
        contact={item}
      />
      <DeleteContactDialog
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        onDelete={handleDelete}
      />
    </li>
  );
};

export default Contact;
