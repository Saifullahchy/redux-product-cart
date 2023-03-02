import { increment } from "./actions";
import { ADDPRODUCT, DECREMENT, INCREMENT } from "./actionType";

const initialState = [];

const createId = (state) => {
  return (
    state.reduce((maxId, currentId) => {
      return Math.max(maxId, currentId.id);
    }, 0) + 1
  );
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          ...action.payload,
          id: createId(state),
        },
      ];

    case INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    default:
      return state;
  }
};

export default productReducers;
