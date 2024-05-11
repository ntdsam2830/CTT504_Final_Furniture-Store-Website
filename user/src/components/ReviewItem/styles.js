import styled from "styled-components";

// Review Item
export const ReviewItemWrapper = styled.div`
  /* Visual */
  background: #fff;
  display: flex;
  border-radius: 1rem;
  width: 92%;
  margin-bottom: 1rem;
`;

export const ReviewItemUser = styled.div`
  /* Typography */
  color: #000;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 600;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
`;

export const ReviewItemContent = styled.div`
  /* Typography */
  color: #898989;
  font-family: Poppins;
  font-size: 1rem;
`;

export const ReviewItemSub = styled.div`
  /* Typography */
  color: #b0b0b0;
  margin-top: 20px;
  font-family: Poppins;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const ReviewItemInfo = styled.div`
  /* Visual */
  margin: 1rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
`;