import { useState, useEffect, useContext } from "react";
import AuthContext from "./auth-contex";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./shop-context";

const ContextProvider = (props) => {
  const initalToken = localStorage.getItem("token");
  const [loginToken, setLoginToken] = useState(initalToken);

  const ctx = useContext(ShopContext);

  const navigate = useNavigate();

  const getDefaultCart = async () => {
    let id = window.localStorage.getItem("email");
    let url = `https://test-api-c7d27-default-rtdb.firebaseio.com/${id}.json`;
    const data = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let temp = {};
        for (let i = 1; i < data.length; i++) {
          temp[i] = data[i];
        }
        ctx.setCartItems(temp);
        console.log("fetched", temp);
      });
  };

  const storeTokenHandler = (idToken) => {
    localStorage.setItem("token", idToken);

    getDefaultCart();

    setLoginToken(() => {
      return idToken;
    });
  };

  const removeTokenHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    ctx.setCartItems({ 1: 0, 2: 0, 3: 0, 4: 0 });
    localStorage.removeItem("cart");
    setLoginToken(() => null);
    navigate("/Login");
  };
  const userIsLogggedIn = !!loginToken;
  console.log("islog", userIsLogggedIn);
  const contextValue = {
    isLoggedIn: userIsLogggedIn,
    logInToken: loginToken,
    storeToken: storeTokenHandler,
    removeToken: removeTokenHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
