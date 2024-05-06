import styled from "styled-components";
import { InputNumber, Button } from "antd";

export const ProductDetailInputNumber = styled(InputNumber)`
  margin-right: 1rem;
  & > div {
    background: #fff;
  }
  .input-button {
    background: transparent;
    border: none;
  }
`;
