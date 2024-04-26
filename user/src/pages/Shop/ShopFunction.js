import React, { useState } from "react";
import { ShopFunctionsWrapper } from "./styles";
import { Checkbox } from "antd";

const options = [
  { label: "Living Room", value: "Livingroom" },
  { label: "Dining Room", value: "Diningroom" },
  { label: "Bedroom", value: "Bedroom" },
];

const ShopFunction = ({ setFilter }) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setFilter(checkedValues);
  };

  return (
    <ShopFunctionsWrapper>
      <div>
        Filter:{" "}
        <Checkbox.Group
          options={options}
          defaultValue={["Apple"]}
          onChange={onChange}
        />
      </div>
    </ShopFunctionsWrapper>
  );
};

export default ShopFunction;
