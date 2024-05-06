import React from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { useFormik } from "formik";
import { Form, Input } from "antd";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/user/userSlice";
import {
  FormButton,
  FormError,
  FormInputWrapper,
  FormTitle,
  FormWrapper,
} from "../Login/styles";

const phoneRegExp = /^[0-9]*$/;

const registerSchema = yup.object({
  userName: yup.string().required("Username is required!"),
  email: yup
    .string()
    .email("Email should be valid!")
    .required("Email address is required!"),
  phoneNumber: yup
    .string()
    .required("Mobile number is required!")
    .matches(phoneRegExp, "Mobile number is not valid"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <div>
      <BreadcrumbCustom />

      <FormWrapper>
        <div>
          <FormTitle>Create Account</FormTitle>

          <FormInputWrapper onFinish={formik.handleSubmit}>
            <Form.Item label="Username" name="userName">
              <Input
                values={formik.values.userName}
                onChange={formik.handleChange("userName")}
                onPressEnter={formik.handleBlur("userName")}
              />
              <FormError>
                {formik.touched.userName && formik.errors.userName}
              </FormError>
            </Form.Item>

            <Form.Item label="Mobile number" name="phoneNumber">
              <Input
                values={formik.values.phoneNumber}
                onChange={formik.handleChange("phoneNumber")}
                onPressEnter={formik.handleBlur("phoneNumber")}
                type="tel"
              />
              <FormError>
                {formik.touched.phoneNumber && formik.errors.phoneNumber}
              </FormError>
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input
                values={formik.values.email}
                onChange={formik.handleChange("email")}
                onPressEnter={formik.handleBlur("email")}
                type="email"
              />
              <FormError>
                {formik.touched.email && formik.errors.email}
              </FormError>
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input.Password
                values={formik.values.password}
                onChange={formik.handleChange("password")}
                onPressEnter={formik.handleBlur("password")}
              />
              <FormError>
                {formik.touched.password && formik.errors.password}
              </FormError>
            </Form.Item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormButton type="primary" htmlType="submit">
                Created
              </FormButton>
            </div>
          </FormInputWrapper>
        </div>
      </FormWrapper>
    </div>
  );
};

export default Register;
