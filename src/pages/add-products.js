import React from "react";
import AddProductFrom from "../components/product-add-from";
import ProductContainer from "../components/cart-item";
import ProductItem from "../components/product-item";
import { useSelector } from "react-redux";

const AddProductPage = () => {
  const data = useSelector((state) => {
    return state.products;
  });
  return (
    <main className="py-16">
      <div className="productWrapper">
        <div class="productContainer" id="lws-productContainer">
          {data.map((item) => {
            return (
              <ProductItem
                price={item.price}
                productTitle={item.productName}
                productCategory={item.category}
                imageURL={item.imageURL}
                quantity={item.quantity}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
        <div>
          <AddProductFrom />
        </div>
      </div>
    </main>
  );
};

export default AddProductPage;
