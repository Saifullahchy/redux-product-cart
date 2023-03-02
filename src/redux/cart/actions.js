import {
  ADDTOCART,
  CARTDECREMENT,
  CARTINCREMENT,
  DELETEFROMCART,
} from "./actionType";

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};

export const cartIncrement = (id) => {
  return {
    type: CARTINCREMENT,
    payload: id,
  };
};

export const cartDecrement = (id) => {
  return {
    type: CARTDECREMENT,
    payload: id,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETEFROMCART,
    payload: id,
  };
};
