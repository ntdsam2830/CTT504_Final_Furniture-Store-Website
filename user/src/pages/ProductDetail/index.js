import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllProducts, getOneProduct } from "../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Row, Col, Rate, Button, Divider, Input } from "antd";
import { ProductDetailImage, ProductDetailInfo, ProductDetailInputNumber, ProductDetailReTitle, ProductDetailWrapper } from "./styles";
import ProductItem from "../../components/ProductItem";
import { addToCart } from "../../features/user/userSlice";
import { getAuthUser } from "../../utils/authStorage";
import { notification } from "antd";
import ReviewItem from "../../components/ReviewItem";
import { getReviewsByProd, createReview } from "../../features/review/reviewSlice";

const { TextArea } = Input;

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = getAuthUser();
  const cart = useSelector((state) => state.auth.userCart) || null;
  const product = useSelector((state) => state.product.singleProduct) || null;
  const allProducts = useSelector((state) => state.product.allProducts) || null;
  const [value, setValue] = useState(1);
  const reviews = useSelector((state) => state.review.reviews) || [];
  const [review, setReview] = useState('');

  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getAllProducts());
    dispatch(getReviewsByProd(id));
  }, [dispatch, id]);

  const handleAddButton = () => {
    var newCur = value;
    setValue(++newCur);
  };

  const handleDecreaseButton = () => {
    if (value === 1) {
      return;
    }
    var newCur = value;
    setValue(--newCur);
  };

  const handleAddCart = () => {
    if (user) {
      const newProduct = {
        id: product.id,
        name: product.name,
        quantity: value,
        price: product.price === 0 ? product.originPrice : product.price,
      };
      dispatch(addToCart(newProduct));
    } else {
      notification.error({
        message: "Need to be logged in!",
      });
    }
  };

  const handleReviewInput = (e) => {
    setReview(e.target.value);
  }

  const handleAddReview = (e) => {
    if (user) {
      setReview(e.target.value);
      if (review && review.length > 0) {
        console.log(review);
      }
      else {
        notification.error({
          message: "Nothing to post.",
        });
      }
    } else {
      notification.error({
        message: "Need to be logged in!",
      });
    }
  };

  const colStyle = {
    padding: '0 2rem 3rem 0',
  };

  return (
    <ProductDetailWrapper>
      {product && product !== null && allProducts !== null && (
        <>
          <Row wrap={false}>
            <Col span={12}>
              <Carousel autoplay autoplaySpeed={2000}>
                {product.images.map((image) => (
                  <ProductDetailImage>
                    <img
                      src={`http://localhost:3500/api/productImg/getImgProduct/${image}`}
                      alt=""
                    />
                  </ProductDetailImage>
                ))}
              </Carousel>
            </Col>
            <Col>
              <ProductDetailInfo>
                <div className="product-title">{product.name}</div>
                <div className="product-price-wrapper">
                  <div>
                    $
                    {product.discount &&
                      product.discount !== "New" &&
                      product.discount !== ""
                      ? product.price
                      : product.originPrice}
                  </div>
                  {product.discount && product.discount !== "New" && (
                    <div>${product.originPrice}</div>
                  )}
                  <Rate disabled defaultValue={product.rating} />
                </div>
                <div className="product-desc">
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {product.fullDesc}
                  </div>
                </div>
                <div>
                  <ProductDetailInputNumber
                    value={value}
                    controls={false}
                    addonBefore={
                      <Button
                        className="input-button"
                        onClick={handleDecreaseButton}
                      >
                        -
                      </Button>
                    }
                    addonAfter={
                      <Button
                        className="input-button"
                        onClick={handleAddButton}
                      >
                        +
                      </Button>
                    }
                  />
                  <Button onClick={handleAddCart}>Add to cart</Button>
                </div>
              </ProductDetailInfo>
            </Col>
          </Row>
          <Divider />
          <Row wrap={false}>
            <Col span={14} style={colStyle}>
              <ProductDetailReTitle>Reviews</ProductDetailReTitle>
              <div style={{ display: 'flex', width: '100%', marginBottom: '2rem' }}>
                <TextArea rows={4} value={review} onChange={handleReviewInput} placeholder="Write your review here" />
                <Button style={{ marginLeft: '1rem' }} onClick={handleAddReview}>Post</Button>
              </div>
              {reviews
                .map((item) => (
                  <ReviewItem item={item} />
                ))}
            </Col>
            <Col span={8} style={{ marginLeft: 'auto' }}>
              <ProductDetailReTitle>Related Products</ProductDetailReTitle>
              <div style={{ background: "#fff", padding: "1rem" }}>
                {allProducts
                  .filter((item) => item.id !== id)
                  .slice(0, 4)
                  .map((item) => (
                    <div style={{ marginBottom: '2rem' }}>
                      <Col key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                          <ProductItem item={item} />
                        </Link>
                      </Col>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </>
      )}
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
