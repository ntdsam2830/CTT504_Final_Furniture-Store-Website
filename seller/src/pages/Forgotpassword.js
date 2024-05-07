import { React, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { replace, useFormik } from "formik";
import { sendEmail } from "../features/auth/authSlice";

let resetSchema = yup.object().shape({
  resetEmail: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
});

const Forgotpassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      resetEmail: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      sessionStorage.setItem("resetEmail", values.resetEmail);
      dispatch(sendEmail(values));
    },
  });

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please Enter your register email to get reset password mail.
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Email Address"
            name="resetEmail"
            id="resetEmail"
            onChng={formik.handleChange("resetEmail")}
            onBlr={formik.handleBlur("resetEmail")}
            val={formik.values.resetEmail}
          />
          <div>
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 vertical mt-2"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Send Code
            </button>
            <button
              className="border-0 px-3 py-2 fw-bold w-100 vertical mt-1"
              style={{ background: "transparent", color: "#9c9c9c" }}
              type="button"
              onClick={() => navigate(-1, { replace: false })}
            >
              <icon className="me-1">{<BiArrowBack />}</icon>
              Back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
