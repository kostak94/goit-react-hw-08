import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CustomField = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label>
      {name}
      <div>
        <Field
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
          </button>
        )}
      </div>
      <ErrorMessage name={name} component={"p"} />
    </label>
  );
};

export default CustomField;
