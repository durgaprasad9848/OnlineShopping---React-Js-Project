import React, { useState, useEffect } from "react";

import { useParams } from "react-router";

import { PRODUCTS } from "../../products";

export const Product_page = () => {
  const [state, setState] = useState(0);

  const params = useParams();
  var page = params.productId.charAt(1) - 1;

  useEffect(() => {
    setState(page);
  }, [page]);
  console.log(state);

  return (
    <div>
      {PRODUCTS[state].extraImages.map((image) => (
        <img src={image} alt="img not found"></img>
      ))}
      {<h1>{PRODUCTS[state].review} </h1>}
    </div>
  );
};
