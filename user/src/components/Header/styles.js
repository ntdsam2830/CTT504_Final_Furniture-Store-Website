import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomLayoutHeader = styled(Layout.Header)`
  /* Box-model */
  display: flex;
  justify-content: space-between;

  /* Typography */
  font-family: "Poppins", sans-serif;

  /* Visual */
  background: #fff;
`;

export const HeaderLogo = styled(Link)`
  /* Box-model */
  display: flex;
  align-items: center;

  /* Typography */
  font-family: Montserrat;
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HeaderName = styled.div`
  margin-left: 0.5rem;
  font-size: 25px;
  @media;
`;

export const HeaderNav = styled.div`
  /* Box-model */
  display: flex;
  align-items: center;

  @media;
`;

export const HeaderNavItem = styled(Link)`
  /* Box-model */
  margin: 1rem;

  /* Typography */
  color: #000;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HeaderIcons = styled.div`
  /* Box-model */
  display: flex;
  align-items: center;
`;

export const HeaderButtonIcons = styled(Button)`
  /* Visual */
  border: none;
  box-shadow: none;
  margin: 0.5rem;
`;
