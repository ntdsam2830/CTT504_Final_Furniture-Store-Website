import React, { useEffect } from "react";
import BreadcrumbCustom from "../../components/Breadcrumb";
import { Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductCart,
  getUserCart,
  deleteAllCart,
} from "../../features/user/userSlice";
import { InputNumber, Button, Layout } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const { Header, Footer, Content } = Layout;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.userCart);

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = { ...record, name: record.productName };
        dispatch(deleteProductCart(data));
        Swal.fire({
          title: "Deleted!",
          text: "This product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handlePayment = () => {
    Swal.fire({
      title: "Ready to complete your purchase?",
      text: "Click 'Cancel' to keep shopping.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Checkout",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAllCart());
        Swal.fire({
          title: "Finished",
          text: "Your cart has been purchased ",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const columns = [
    {
      title: "Product",
      dataIndex: "productName",
      key: "product",
      render: (text, record) => <Link to={`/shop/${record.id}`}>{text}</Link>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "product",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <InputNumber value={text} controls={false} />,
    },
    {
      title: "Subtotal",
      dataIndex: "total",
      key: "subtotal",
    },
    {
      title: "",
      dataIndex: "",
      key: "delete",
      render: (_, record) => (
        <Button onClick={() => handleDelete(record)} icon={<DeleteFilled />} />
      ),
    },
  ];

  return (
    <div style={{ background: "#fff", width: "100%" }}>
      <BreadcrumbCustom />
      <div
        style={{
          display: "flex",
          // flexDirection: "row",
          // alignItem: "center",
          justifyContent: "space-around",
          margin: "50px ",
        }}
      >
        <div style={{ width: "90%" }}>
          <Table columns={columns} dataSource={cart} rowKey="id" />
        </div>
        <div style={{ width: "50%" }}>
          <Layout
            style={{
              marginLeft: "22px",
              borderRadius: 8,
              overflow: "hidden",
              width: "80%",
              maxWidth: "calc(100% - 8px)",
            }}
          >
            <Header
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: "32px",
                height: 64,
                paddingInline: 48,
                lineHeight: "64px",
                backgroundColor: "#F9F1E7",
              }}
            >
              Cart Totals
            </Header>
            <Content
              style={{
                backgroundColor: "#F9F1E7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // alignItem: "center",
                  justifyContent: "space-around",
                }}
              >
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                    minHeight: 120,
                    lineHeight: "120px",
                    color: "black",
                  }}
                >
                  Total Price:
                </Typography>
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    minHeight: 120,
                    lineHeight: "120px",
                    fontSize: "20px",
                    color: "#B88E2F",
                  }}
                >
                  {cart.reduce((prev, curr) => prev + curr.total, 0)}
                </Typography>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: "center",
                color: "#fff",
                backgroundColor: "#F9F1E7",
              }}
            >
              {cart.length !== 0 ? (
                <Button
                  style={{ backgroundColor: "#F9F1E7", borderColor: "black" }}
                  onClick={(record) => handlePayment(record)}
                >
                  Check Out
                </Button>
              ) : (
                <Button
                  style={{ backgroundColor: "#F9F1E7", borderColor: "black" }}
                  onClick={handlePayment}
                  disabled
                >
                  Check Out
                </Button>
              )}
            </Footer>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Cart;
