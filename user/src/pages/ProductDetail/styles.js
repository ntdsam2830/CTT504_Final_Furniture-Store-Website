import styled from "styled-components";
import { InputNumber, Button } from "antd";

export const ProductDetailWrapper = styled.div`
  margin: 2rem;
`;

export const ProductDetailImage = styled.div`
  height: 30rem;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 1rem;
  }
`;

export const ProductDetailInfo = styled.div`
  margin-left: 1rem;

  & > .product-title {
    color: #000;
    font-size: 2rem;
    font-weight: 400;
  }

  & > .product-price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    color: #9f9f9f;
    font-size: 1.5rem;
    font-weight: 500;

    & > div:first-child {
      margin-right: 1rem;
      color: #000;
    }

    & > div:nth-child(2) {
      text-decoration: line-through;
      margin-right: 1rem;
    }
  }

  & > .product-desc {
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
    & > .product-attr {
      margin-left: 1rem;
      list-style-type: square;
    }
  }
`;

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

export const ProductDetailReTitle = styled.div`
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
