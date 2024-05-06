import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { replace } from "formik";

const Forgotpassword = () => {
  const navigate = useNavigate();
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
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <div>
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 vertical mt-2"
              style={{ background: "#ffd333" }}
              type="submit"
            >
              Send Link
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
