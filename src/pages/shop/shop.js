import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import AuthContext from "../../context/auth-contex";
export const Shop = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{ 
    if(!ctx.isLoggedIn)
    {
      navigate('/Login');
    }

  },[]);
 
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