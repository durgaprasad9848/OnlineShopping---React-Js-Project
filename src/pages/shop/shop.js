import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
      <div className="generics">
        <h1 className="generics-text"> The Generics</h1>{" "}
      </div>
      <div className="shopTitle">
        <h1>Music</h1>
      </div>
      <br />

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
