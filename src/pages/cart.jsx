import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "../components/bill-details";
import CartItem from "../components/cart-item";

const Cart = () => {
  const data = useSelector((state) => {
    return state?.cart;
  });

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {data.map((item) => {
              return (
                <CartItem
                  productName={item.productName}
                  productCategory={item.productCategory}
                  price={item.price}
                  quantity={item.quantity}
                  imageURL={item.imageURL}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </div>
          {/* Bill Details */}
          <BillDetails />
        </div>
      </div>
    </main>
  );
};

export default Cart;
