import React, { useEffect } from "react";
import {
  CustomLayoutHeader,
  HeaderButtonIcons,
  HeaderIcons,
  HeaderLogo,
  HeaderName,
  HeaderNav,
  HeaderNavItem,
} from "./styles";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Shop from "../../pages/Shop";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../utils/authStorage";
import { Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";

const Header = () => {
  const user = getAuthUser();
  const dispatch = useDispatch();

  const handleLogout = (refreshToken) => {
    dispatch(logoutUser(refreshToken));
  };

  const items = [
    {
      label: !user ? (
        <Link to="login">Login</Link>
      ) : (
        <Link to="/profile">My Account</Link>
      ),
      key: "0",
    },
    {
      label: !user ? (
        <Link to="register">Register</Link>
      ) : (
        <Link to="/" onClick={() => handleLogout()}>
          Log Out
        </Link>
      ),
      key: "1",
    },
  ];
  return (
    <CustomLayoutHeader>
      <HeaderLogo to="/">
        <img src="/logo_web.png" alt="logo" />
        <HeaderName>Future Furniture.</HeaderName>
      </HeaderLogo>

      <HeaderNav>
        <HeaderNavItem to="/" element={<Home />}>
          Home
        </HeaderNavItem>
        <HeaderNavItem to="/about" element={<About />}>
          About
        </HeaderNavItem>
        <HeaderNavItem to="/shop" element={<Shop />}>
          Shop
        </HeaderNavItem>
      </HeaderNav>

      <HeaderIcons>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Link>
            <HeaderButtonIcons icon={<UserOutlined />} size="large" />
          </Link>
        </Dropdown>
        {/* <Link>
          <HeaderButtonIcons icon={<SearchOutlined />} size="large" />
        </Link>
        <Link>
          <HeaderButtonIcons icon={<HeartOutlined />} size="large" />
        </Link> */}
        <Link to="cart">
          <HeaderButtonIcons icon={<ShoppingCartOutlined />} size="large" />
        </Link>
      </HeaderIcons>
    </CustomLayoutHeader>
  );
};

export default Header;
