import React from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  FormButton,
  FormError,
  FormInputWrapper,
  FormTitle,
  FormWrapper,
} from "./styles";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <div>
      <BreadcrumbCustom />

      <FormWrapper>
        <div>
          <FormTitle>Login Account</FormTitle>

          <FormInputWrapper onFinish={formik.handleSubmit}>
            <Form.Item label="Email" name="email">
              <Input
                values={formik.values.email}
                onChange={formik.handleChange("email")}
                onPressEnter={formik.handleBlur("email")}
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
                Login
              </FormButton>
            </div>
          </FormInputWrapper>
        </div>
      </FormWrapper>
    </div>
  );
};

export default Login;
