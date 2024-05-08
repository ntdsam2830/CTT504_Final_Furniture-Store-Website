import React from "react";
import CustomInput from "../components/CustomInput";
import CustomTextarea from "../components/CustomTextarea";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { createProducts } from "../features/product/productSlice";
import { Checkbox, Flex } from "antd";
const CheckboxGroup = Checkbox.Group;


const Addproduct = () => {
  const dispatch = useDispatch();

  const options = [
    { label: 'Dining Room', value: 'Diningroom' },
    { label: 'Living Room', value: 'Livingroom' },
    { label: 'Bed Room', value: 'Bedroom' },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      originPrice: null,
      quantity: null,
      quantitySale: 0,
      shortDesc: "",
      fullDesc: "",
      type: [],
      rating: 5,
      discount: "New",
      image: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Product name is required")
        .min(2, "Minimum 2 characters")
        .max(200, "Maximum 200 characters"),
      originPrice: Yup.number()
        .required('Product price is required')
        .test(
          'Is positive?',
          'Product price must be positive',
          (value) => value > 0
        ),
      quantity: Yup.number()
        .required('Product quantity is required')
        .test(
          'Is positive?',
          'Product quantity must be positive',
          (value) => value > 0
        ),
      shortDesc: Yup.string()
        .required("Short description is required")
        .max(100, "Maximum 100 characters"),
      fullDesc: Yup.string().required("Full description is required"),
    }),
    onSubmit: (values) => {
      values.originPrice = Number(values.originPrice);
      values.quantity = Number(values.quantity);
      console.log(values);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("originPrice", values.originPrice);
      formData.append("quantity", values.quantity);
      formData.append("shortDesc", values.shortDesc);
      formData.append("fullDesc", values.fullDesc);
      for (let i = 0; i < values.type.length; i++) {
        formData.append("type", values.type[i]);
      }
      formData.append("rating", values.rating);
      formData.append("discount", values.discount);
      for (let i = 0; i < values.image.length; i++) {
        formData.append("image", values.image[i]);
      }
      dispatch(createProducts(formData));
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <h5>Product information</h5>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Product Name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="alert-error">
              {formik.touched.name && formik.errors.name}
            </p>
          )}
          <CustomInput
            type="number"
            label="Product Price($)"
            onChng={formik.handleChange("originPrice")}
            onBlr={formik.handleBlur("originPrice")}
            val={formik.values.originPrice}
          />
          {formik.errors.originPrice && formik.touched.originPrice && (
            <p className="alert-error">
              {formik.touched.originPrice && formik.errors.originPrice}
            </p>
          )}
          <CustomInput
            type="number"
            label="Product Quantity"
            onChng={formik.handleChange("quantity")}
            onBlr={formik.handleBlur("quantity")}
            val={formik.values.quantity}
          />
          {formik.errors.quantity && formik.touched.quantity && (
            <p className="alert-error">
              {formik.touched.quantity && formik.errors.quantity}
            </p>
          )}
          <CustomInput
            type="text"
            label="Short Description"
            onChng={formik.handleChange("shortDesc")}
            onBlr={formik.handleBlur("shortDesc")}
            val={formik.values.shortDesc}
          />
          {formik.errors.shortDesc && formik.touched.shortDesc && (
            <p className="alert-error">
              {formik.touched.shortDesc && formik.errors.shortDesc}
            </p>
          )}
          <CustomTextarea
            label="Full Description"
            onChng={formik.handleChange("fullDesc")}
            onBlr={formik.handleBlur("fullDesc")}
            val={formik.values.fullDesc}
          />
          {formik.errors.fullDesc && formik.touched.fullDesc && (
            <p className="alert-error">
              {formik.touched.fullDesc && formik.errors.fullDesc}
            </p>
          )}

          <h5 style={{ marginRight: '10px', marginTop: '30px' }}>Product category</h5>
          <div className="product-list-filter">
            <CheckboxGroup options={options}
              onChange={(checkedValues) => {
                formik.setFieldValue("type", checkedValues);
              }} />
          </div>

          <h5 style={{ marginRight: '10px', marginTop: '30px' }}>Product image(s)</h5>
          <div class="mt-3">
            <input class="form-control"
              type="file"
              name="photo"
              accept="image/*"
              id="formFile"
              multiple
              onChange={(e) =>
                formik.setFieldValue("image", e.currentTarget.files)
              } />
          </div>

          <Flex gap="small" wrap="wrap">
            <button
              className="btn btn-success border-0 rounded-3 my-5"
              type="submit"
            >
              Add product
            </button>

            <Link
              to="/admin"
              className="btn btn-primary border-0 rounded-3 my-5"
              type="button"
              onClick={formik.resetForm}
            >
              Back
            </Link>
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
