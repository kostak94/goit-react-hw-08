import * as yup from "yup";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
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
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        alert(`Welcome, ${data.user.name}!`);
        navigate("/");
      })
      .catch(() => alert("Credentials invalid"));
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
