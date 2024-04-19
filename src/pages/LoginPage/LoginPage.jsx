import * as yup from "yup";
import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
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
    dispatch(login(values))
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
      type="login"
      title="Login"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    />
  );
};

export default LoginPage;
