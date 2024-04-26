import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderTitle = styled.div`
  /* Typography */
  color: #000;
  font-size: 2rem;
  font-weight: 700;
`;

export const HeaderSubTitle = styled.div`
  /* Typography */
  color: #666;
  font-family: Poppins;
  font-size: 1.25rem;
  font-weight: 400;
`;

// Banner
export const BannerWrapper = styled.div`
  /* Box-model */
  position: relative;

  /* Typography */
  font-family: "Poppins", sans-serif;

  /* Visual */
  background: url("banner.png") no-repeat;
  background-size: cover;
  height: calc(100vh - 64px);
`;

export const BannerMask = styled.div`
  /* Box-model */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);

  /* Visual */
  border-radius: 1.25rem;
  background: #fff3e3;
  padding: 2rem 2rem 1.25rem;
`;

export const BannerMaskSub = styled.div`
  /* Typography */
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.25rem;
`;

export const BannerMaskTitle = styled.div`
  /* Typography */
  color: #b88e2f;
  font-size: 3.2rem;
  font-weight: 800;
`;

export const BannerMaskContent = styled.div`
  /* Typography */
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const BannerMaskButton = styled(Button)`
  /* Box-model */
  margin: 2rem 0;
  padding: 1rem 4rem;
  height: auto;

  /* Typography */
  color: #fff;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  /* Visual */
  background: #b88e2f;
`;

// BrowseRange
export const BrowseRangeWrapper = styled.div`
  /* Box-model */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  /* Typography */
  font-family: "Poppins", sans-serif;

  /* Visual */
  background: #fff;
`;

export const BrowseRangeRow = styled(Row)`
  /* Box-model */
  padding: 4rem 0;
  width: 100%;
`;

export const BrowseRangeCol = styled(Col)`
  /* Box-model */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Typography */
  color: #000;
  font-family: Poppins;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const BrowseRangeImage = styled.img`
  /* Box-model */
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

// Our Products
export const OurProductsWrapper = styled.div`
  /* Box-model */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  /* Typography */
  font-family: "Poppins", sans-serif;

  /* Visual */
  background: #fff;
`;

export const OurProductsButton = styled(Link)`
  /* Visual */
  margin: 2rem;
  border: 1px solid #b88e2f;
  background: #fff;
  padding: 1rem 4rem;

  /* Typography */
  color: #b88e2f;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 600;
`;
