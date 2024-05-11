import styled from "styled-components";
import { Form, Button } from "antd";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 40%;
    background: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 0 10px #0000001a;
    margin: 2rem 0;
    padding: 2rem 0;
  }
`;

export const FormTitle = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FormInputWrapper = styled(Form)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 1rem;
  width: 60%;
`;

export const FormError = styled.div`
  color: red;
`;

export const FormButton = styled(Button)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0.2rem;
  padding: 
  width: 30%;
  background: #b88e2f;

  &:hover {
    background: #000;
  }
`;
