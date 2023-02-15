import React, { useContext, useEffect,lazy,Suspense } from "react";
import { useNavigate } from "react-router";
import { PRODUCTS } from "../../products";
//import { Product } from "./product";
import "./shop.css";
import AuthContext from "../../context/auth-contex";
const Product = lazy(()=> import('./product'));


export const Shop = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!ctx.isLoggedIn) {
      navigate("/Login");
    }
  }, []);

  return (
    <div>
      <div className="generics">
        <h1 className="generics-text"> The Generics</h1>{" "}
      </div>
      <div className="shopTitle">
        <h1>Music</h1>
      </div>
      <br />
      <Suspense fallback={<div>Loading...</div>}> 
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      </Suspense>
    </div>
  );
};
