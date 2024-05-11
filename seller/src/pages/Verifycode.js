import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { replace, useFormik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { sendEmail, sendVerification } from "../features/auth/authSlice";

let verifySchema = yup.object().shape({
  verifycode: yup.string().required("Verification code is Required"),
});

const Verifycode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resetEmail = sessionStorage.getItem("resetEmail");

  const formik = useFormik({
    initialValues: {
      verifycode: "",
    },
    validationSchema: verifySchema,
    onSubmit: (verifycode) => {
      dispatch(
        sendVerification({ email: resetEmail, otp: verifycode.verifycode })
      );
    },
  });
  const handleResend = () => {
    dispatch(sendEmail({ resetEmail: resetEmail }));
  };

  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h4 className="text-center title"> An email has been sent to you</h4>
        <p className="text-center">
          Check the email that's associated with your account for the reset
          password code.{" "}
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Verification code"
            id="verifycode"
            name="verifycode"
            onChng={formik.handleChange("verifycode")}
            onBlr={formik.handleBlur("verifycode")}
            val={formik.values.verifycode}
          />
          <div className="error mt-2">
            {formik.touched.verifycode && formik.errors.verifycode}
          </div>
          <div>
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 vertical mt-2"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Verify
            </button>
            <button
              className="border-0 px-3 py-2 w-100 vertical mt-1"
              style={{
                background: "transparent",
                color: "#4894f7",
              }}
              type="button"
              onClick={handleResend}
            >
              Send me another code
            </button>
            <button
              className="border-0 px-3 py-2 fw-bold w-100 vertical mt-0"
              style={{ background: "transparent", color: "#9c9c9c" }}
              type="button"
              onClick={() => navigate("/", { replace: false })}
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

export default Verifycode;
