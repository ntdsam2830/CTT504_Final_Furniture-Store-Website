import React from "react";
import {
  BannerMask,
  BannerMaskButton,
  BannerMaskContent,
  BannerMaskSub,
  BannerMaskTitle,
  BannerWrapper,
} from "./styles";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerMask>
        <BannerMaskSub>New Arrival</BannerMaskSub>
        <BannerMaskTitle>
          <div>Discover Our New Collection</div>
          <div></div>
        </BannerMaskTitle>
        <BannerMaskContent>
          Transform your space with our stylish, quality-crafted furniture
          collection. Elevate your home's beauty and comfort effortlessly.
        </BannerMaskContent>
        <Link to={"/shop"}>
          <BannerMaskButton>Buy Now</BannerMaskButton>
        </Link>
      </BannerMask>
    </BannerWrapper>
  );
};

export default Banner;
