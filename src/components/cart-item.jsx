import React from "react";
import { useDispatch } from "react-redux";
import {
  cartDecrement,
  cartIncrement,
  deleteProduct,
} from "../redux/cart/actions";
import ProductItem from "./product-item";

const CartItem = ({
  imageURL,
  productName,
  productCategory,
  price,
  quantity,
  id,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(cartIncrement(id));
  };

  const handleDecrement = (id) => {
    dispatch(cartDecrement(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img className="lws-cartImage" src={imageURL} alt="product" />
        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{productName}</h4>
          <p className="lws-cartCategory">{productCategory}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleIncrement(id)}
          >
            <i className="text-lg fa-solid fa-plus" />
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleDecrement(id)}
          >
            <i className="text-lg fa-solid fa-minus" />
          </button>
        </div>
        {/* price */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>
      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
