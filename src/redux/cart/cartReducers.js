import {
  ADDTOCART,
  CARTDECREMENT,
  CARTINCREMENT,
  DELETEFROMCART,
} from "./actionType";

const initialState = [];
const createId = (state) => {
  return (
    state.reduce((maxId, currentId) => {
      return Math.max(maxId, currentId.id);
    }, 0) + 1
  );
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      
      if (found === true) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      return [
        ...state,
        { ...action.payload, id: createId(state), quantity: 1 },
      ];
    case CARTINCREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return state;
      });
    case CARTDECREMENT:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return state;
      });

    case DELETEFROMCART:
      return state.filter((currentItem) => {
        return currentItem.id !== action.payload;
      });

    default:
      return state;
  }
};

export default cartReducers;
