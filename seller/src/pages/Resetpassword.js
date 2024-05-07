import React from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendNewPassword } from "../features/auth/authSlice";

const Resetpassword = () => {
  const dispatch = useDispatch();
  const resetEmail = sessionStorage.getItem("resetEmail");

  let resetPassSchema = yup.object().shape({
    newpass: yup.string().required("Password is required"),
    confirmpass: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("newpass")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      newpass: "",
      confirmpass: "",
    },
    validationSchema: resetPassSchema,
    onSubmit: (values) => {
      dispatch(
        sendNewPassword({ email: resetEmail, newPassword: values.newpass })
      );
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
        <h3 className="text-center title"> Reset Password</h3>
        <p className="text-center">Please Enter your new password.</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="password"
            label="New Password"
            id="newpass"
            name="newpass"
            onChng={formik.handleChange("newpass")}
            onBlr={formik.handleBlur("newpass")}
            val={formik.values.newpass}
          />
          <div className="error mt-2">
            {formik.touched.newpass && formik.errors.newpass}
          </div>
          <CustomInput
            type="password"
            label="Confirm Password"
            id="confirmpass"
            name="confirmpass"
            onChng={formik.handleChange("confirmpass")}
            onBlr={formik.handleBlur("confirmpass")}
            val={formik.values.confirmpass}
          />
          <div className="error mt-2">
            {formik.touched.confirmpass && formik.errors.confirmpass}
          </div>
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100 mt-3"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
