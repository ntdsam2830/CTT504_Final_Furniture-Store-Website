import styled from "styled-components";

// Product Item
export const ProductItemWrapper = styled.div`
  /* Visual */
  background: #f4f5f7;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  height: 100%;
`;

export const ProductItemImage = styled.div`
  /* Box-model */
  position: relative;

  /* Visual */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 18.75rem;
  width: 100%;
`;

export const ProductItemTitle = styled.div`
  /* Typography */
  color: #000;
  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 600;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  margin-bottom: auto;
`;

export const ProductItemShortDesc = styled.div`
  /* Typography */
  color: #898989;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 500;
`;

export const ProductItemPrice = styled.div`
  /* Box-model */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductItemPriceText = styled.div`
  /* Typography */
  color: #000;
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
`;

export const ProductItemPriceSub = styled.div`
  /* Typography */
  color: #b0b0b0;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: line-through;
`;

export const ProductItemInfo = styled.div`
  /* Visual */
  margin: 1rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  height: 8rem;
`;

export const ProductItemImageLabel = styled.div`
  /* Box-model */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: 1rem;

  /* Visual */
  width: 3rem;
  height: 3rem;
  background: ${(props) => (props.sale === "New" ? "#2EC1AC" : "#e97171")};
  border-radius: 50%;

  /* Typography */
  color: #fff;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 500;
`;
