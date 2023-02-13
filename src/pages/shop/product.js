import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, productImage} = props.data;
  const { addToCart } = useContext(ShopContext);

 
  let target = `/Product_page/:${id}`;


  return (
    

    <div className="product">
      
      <h5>Album {id}</h5>
      <Link to ={target}  > 
      
      <img src={productImage} />
      </Link> 
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart 
      </button>
     
    </div>
  
    
  );
};

export default Product;