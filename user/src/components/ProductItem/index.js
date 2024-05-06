import React from "react";
import {
  ProductItemImage,
  ProductItemImageLabel,
  ProductItemInfo,
  ProductItemPrice,
  ProductItemPriceSub,
  ProductItemPriceText,
  ProductItemShortDesc,
  ProductItemTitle,
  ProductItemWrapper,
} from "./styles";

const ProductItem = ({ item, style }) => {
  return (
    <ProductItemWrapper style={style}>
      <ProductItemImage
        style={{
          backgroundImage: `url(http://localhost:3500/api/productImg/getImgProduct/${item.images[0]})`,
        }}
      >
        {item.discount && item.discount !== "" && (
          <ProductItemImageLabel sale={item.discount}>
            {item.discount}
          </ProductItemImageLabel>
        )}
      </ProductItemImage>

      <ProductItemInfo>
        <ProductItemTitle>{item.name}</ProductItemTitle>
        <ProductItemShortDesc>{item.shortDesc}</ProductItemShortDesc>
        <ProductItemPrice>
          <ProductItemPriceText>
            $
            {item.discount && item.discount !== "New" && item.discount !== ""
              ? item.price
              : item.originPrice}
          </ProductItemPriceText>
          {item.discount && item.discount !== "New" && (
            <ProductItemPriceSub>${item.originPrice}</ProductItemPriceSub>
          )}
        </ProductItemPrice>
      </ProductItemInfo>
    </ProductItemWrapper>
  );
};

export default ProductItem;
