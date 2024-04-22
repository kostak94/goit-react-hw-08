import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import css from "../PhoneBook.module.css";


const CustomField = ({ type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className={css.labelLog}>
      {name}
      <div className={css.inputWrapper}>
        <Field
          className={css.inputLog}
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button className={css.iconBtn} type="button" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
          </button>
        )}
      </div>
      <ErrorMessage className={css.red} name={name} component={"p"} />
    </label>
  );
};

export default CustomField;
