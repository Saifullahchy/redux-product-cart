import { ADDPRODUCT, DECREMENT, INCREMENT } from "./actionType";

export const addProduct = (value) => {
  return {
    type: ADDPRODUCT,
    payload: value,
  };
};

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
