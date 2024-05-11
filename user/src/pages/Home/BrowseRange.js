import React from "react";
import {
  BrowseRangeCol,
  BrowseRangeImage,
  BrowseRangeRow,
  BrowseRangeWrapper,
  HeaderTitle,
} from "./styles";
import { BROWSERANGEDATA } from "./constants";
import { Link } from "react-router-dom";

const BrowseRange = () => {
  return (
    <BrowseRangeWrapper>
      <HeaderTitle>Browse The Range</HeaderTitle>
      <div>Discover diversity: browse our range for tailored quality.</div>
      <BrowseRangeRow justify="space-around">
        {BROWSERANGEDATA.map((item) => (
          <Link to="/shop">
            <BrowseRangeCol>
              <BrowseRangeImage src={item.image} alt={item.name} style={{ cursor: "pointer" }} />
              <div>{item.name}</div>
            </BrowseRangeCol>
          </Link>
        ))}
      </BrowseRangeRow>
    </BrowseRangeWrapper>
  );
};

export default BrowseRange;
