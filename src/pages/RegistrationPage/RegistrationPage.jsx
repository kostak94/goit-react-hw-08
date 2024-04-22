import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        toast.success(`Registration is success ${data.user.name}, welcome!`);
        console.log({ data });
        navigate("/");
      })
      .catch(() => toast.error("Credentials invalid"));
  };

  const initialValues = {
    name: "",
    password: "",
    email: "",
  };

  return (
    <AuthForm
      type="register"
      title="Registration"
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  );
};

export default RegistrationPage;
