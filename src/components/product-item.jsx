import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, cartIncrement } from "../redux/cart/actions";

const ProductItem = ({
  productTitle,
  productCategory,
  price,
  quantity,
  imageURL,
  id,
}) => {
  const dispatch = useDispatch();

  const addToCartBtn = () => {
    let found = false;
    for (let item of state) {
        if (item.id === action.payload.id) {
            found = true;
        }
    }

    if(found){
      return dispatch(cartIncrement(id));
    }
    
    dispatch(
      addToCart({
        productTitle,
        productCategory,
        price,
        quantity,
        imageURL,
      })
    );
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imageURL} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productTitle}</h4>
        <p className="lws-productCategory">{productCategory}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => {
            addToCartBtn();
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
