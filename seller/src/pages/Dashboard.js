import React, { useEffect } from "react";
import { Column } from "@ant-design/plots";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dataSale = useSelector((state) => {
    let products = state.product.products;

    if (products) {
      let sorted = [...products].sort((a, b) => b.quantitySale - a.quantitySale);
      let top10 = sorted.slice(0, 10);

      return top10;
    }
  });

  const dataRating = useSelector((state) => {
    let products = state.product.products;

    if (products) {
      let sorted = [...products].sort((a, b) => b.rating - a.rating);
      let top10 = sorted.slice(0, 10);

      return top10;
    }
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!dataSale && !dataRating) {
    return <div>Loading...</div>;
  }

  const config1 = {
    data: dataSale,
    xField: "name",
    yField: "quantitySale",
    color: "#ffd333",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "Product",
      },
      quantitySale: {
        alias: "Items sold",
      },
    },
  };

  const config2 = {
    data: dataRating,
    xField: "name",
    yField: "rating",
    color: "#ffd333",
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      name: {
        alias: "Product",
      },
      rating: {
        alias: "Rating",
      },
    },
  };

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="mt-4">
        <h3 className="mb-4">Sales</h3>
        <div>
          <Column {...config1} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Ratings</h3>
        <div>
          <Column {...config2} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
