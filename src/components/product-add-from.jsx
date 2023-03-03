import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/actions";

const AddProductFrom = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    productName: "",
    category: "",
    imageURL: "",
    price: "",
    quantity: "",
  });

  const onChangeHandler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onProductSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(inputs));

    setInputs({
      productName: "",
      category: "",
      imageURL: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <div>
      {/* Product Input Form */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={onProductSubmit}
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="name">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              name="productName"
              value={inputs.productName}
              onChange={onChangeHandler}
              required
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              value={inputs.category}
              onChange={onChangeHandler}
              name="category"
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              name="imageURL"
              value={inputs.imageURL}
              onChange={onChangeHandler}
              required
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                className="addProductInput"
                type="number"
                name="price"
                id="lws-inputPrice"
                value={inputs.price}
                onChange={onChangeHandler}
                required
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                name="quantity"
                id="lws-inputQuantity"
                onChange={onChangeHandler}
                value={inputs.quantity}
                required
              />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* Product Input Form Ends */}
    </div>
  );
};

export default AddProductFrom;
