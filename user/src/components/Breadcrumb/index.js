import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { BreadcrumbWrapper } from "./styles";

const title = {
  login: "Account",
  register: "Create Account",
  profile: "My Profile",
  "login-recover": "Account",
  "reset-pass": "Account",
  shop: "Our Store",
  cart: "Cart",
};

const BreadcrumbCustom = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    return (
      <BreadcrumbWrapper>
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{title[name]}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{title[name]}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </BreadcrumbWrapper>
    );
  };
  return <>{breadCrumbView()}</>;
};

export default BreadcrumbCustom;
