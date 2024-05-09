import React, { useEffect, useState } from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { ShopCustomRow, ShopFunctionPagination } from "./styles";
import { Row, Col, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getFunctionProducts,
} from "../../features/product/productSlice";
import { chunk } from "lodash";
import ProductItem from "../../components/ProductItem";
import ShopFunction from "./ShopFunction";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { useLocation } from "react-router-dom";


const { Title } = Typography;
const Shop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.allProducts) || [];
  const funcProducts = useSelector((state) => state.product.funcProducts) || [];
  const functionProducts =
    useSelector((state) => state.product.funcProducts) || [];
  const [current, setCurrent] = useState(1);
  const [filter, setFilter] = useState([]);

  const onChange = (page) => {
    document.documentElement.scrollTo(0, 0);
    setCurrent(page);
  };

  useEffect(() => {
    if (filter.length !== 0) {
      const queryString = filter.map((room) => `&type=${room}`).join("");
      dispatch(getFunctionProducts(`?page=${current}&limit=12&${queryString}`));
    } else {
      dispatch(getAllProducts());
      dispatch(getFunctionProducts(`?page=${current}&limit=12`));
    }
  }, [dispatch, current, filter]);

  return (
    <div>
      {products && products !== null && (
        <div style={{ background: "#fff" }}>
          <BreadcrumbCustom />

          <ShopFunction setFilter={setFilter} />

          <ShopCustomRow>
            {functionProducts.length !== 0 ? (
              chunk(functionProducts, 4).map((row) => (
                <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
                  {row.map((item) => (
                    <Col span={6} key={item.id} flex={"auto"}>
                      <Link to={`${item.id}`}>
                        <ProductItem item={item} />
                      </Link>
                    </Col>
                  ))}
                </Row>
              ))
            ) : (
              <div style={{ textAlign: "center", marginTop: 50 }}>
                <Title level={2}>No result found!</Title>
              </div>
            )}
          </ShopCustomRow>

          <ShopFunctionPagination
            current={current}
            total={filter.length === 0 ? products.length : funcProducts.length}
            defaultPageSize={12}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default Shop;
