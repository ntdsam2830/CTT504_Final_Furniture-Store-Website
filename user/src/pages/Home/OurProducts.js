import React, { useEffect } from "react";
import { HeaderTitle, OurProductsButton, OurProductsWrapper } from "./styles";
import { Col, Row } from "antd";
import { chunk } from "lodash";
import ProductItem from "../../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.allProducts) || [];

  useEffect(() => {
    dispatch(getAllProducts(""));
  }, [dispatch]);
  return (
    <OurProductsWrapper>
      <HeaderTitle>Our Products</HeaderTitle>
      <div style={{ width: "100%" }}>
        {products.length !== 0 ? (
          chunk(products?.slice(0, 8), 4).map((row) => (
            <Row gutter={[16, 16]} justify="center" style={{ marginTop: 32 }}>
              {row.map((item) => (
                <Col span={5} key={item.id}>
                  <Link to={`/shop/${item.id}`}>
                    <ProductItem item={item} />
                  </Link>
                </Col>
              ))}
            </Row>
          ))
        ) : (
          <></>
        )}
      </div>
      <OurProductsButton to="shop">Show More</OurProductsButton>
    </OurProductsWrapper>
  );
};

export default OurProducts;
