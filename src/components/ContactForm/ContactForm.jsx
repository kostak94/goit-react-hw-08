import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "../PhoneBook.module.css";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contacts/operations";
import { Button, TextField } from "@material-ui/core";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ contact }) => {
  const dispatch = useDispatch();

  const regex = "^[0-9]*$";

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be minimum 3 characters")
      .max(50, "Must be maximum 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(regex, "Enter a digits")
      .min(7, "Must be 7 digit format")
      .max(7, "Must be 7 digit format")
      .required("Number is required"),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully added contact!");
      });

    actions.resetForm();
  }
  function updateSubmit(values, actions) {
    dispatch(
      updateContact({
        id: contact.id,
        newData: { name: values.name, number: values.number },
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Successfully updated contact!");
      });

    actions.resetForm();
  }

  return (
    <div className={css.addForm}>
      <Formik
        initialValues={
          contact
            ? { name: contact.name, number: contact.number }
            : initialValues
        }
        onSubmit={contact ? updateSubmit : handleSubmit}
        validationSchema={contactSchema}>
        <Form className={css.form}>
          <div>
            <label className={css.label}>
              Name
              <Field
                className={css.input}
                as={TextField}
                type="text"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </label>
          </div>
          <div>
            <label className={css.label}>
              Number
              <Field
                as={TextField}
                className={css.input}
                type="text"
                name="number"
              />
              <ErrorMessage
                component="span"
                name="number"
                className={css.error}
              />
            </label>
          </div>
          <Button
            variant="contained"
            color="primary"
            // className={css.btn}
            type="submit">
            {contact ? "Update contact" : "Add contact"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
