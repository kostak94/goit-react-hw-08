import * as yup from "yup";
import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(login(values))
      .unwrap()
      .then((data) => {
        console.log(`Welcome, ${data.user.name}!`);
        navigate("/");
      })
      .catch(() => alert("Credentials invalid"));
  };

  const initialValues = {
    password: "",
    email: "",
  };

  return (
    <AuthForm
      title="Login"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    />
  );
};

export default LoginPage;
