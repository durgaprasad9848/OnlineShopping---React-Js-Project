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
    let id=window.localStorage.getItem("email");
    let url = `https://test-api-c7d27-default-rtdb.firebaseio.com/${id}.json`;
     const data = await fetch(
       url
     )
       .then((response) => response.json())
       .then((data) => {
        let temp ={};
        for(let i=1;i<data.length;i++)
        {
          temp[i]=data[i];
        }
        ctx.setCartItems(temp);
        console.log("fetched",temp);
       });
   
   
   };

//   const checkForInactivity = () => {
//     const expireTime = localStorage.getItem("expireTime");

//     if (expireTime < Date.now()) {
  
//       removeTokenHandler();
//     }
//   };

//   const updateExpireTime = () => {
//     const expireTime = Date.now() + 10000;
//     localStorage.setItem("expireTime", expireTime);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       checkForInactivity();
//     }, 5000);

//     return () => clearInterval(interval);
//   });

//   useEffect(() => {
//     window.addEventListener("click", updateExpireTime);
//     window.addEventListener("keypress", updateExpireTime);
//     //   window.addEventListener("scroll", updateExpireTime);
//     window.addEventListener("mousemove", updateExpireTime);

//     return () => {
//       window.removeEventListener("click", updateExpireTime);
//       window.removeEventListener("keypress", updateExpireTime);
//       //   window.removeEventListener("scroll", updateExpireTime);
//       window.removeEventListener("mousemove", updateExpireTime);
//     };
//   }, []);

  const storeTokenHandler = (idToken) => {
    localStorage.setItem("token", idToken);
   // localStorage.setItem("expireTime", Date.now());

  
   

   getDefaultCart();



    setLoginToken(() => {
      return idToken;
    });
  };

  const removeTokenHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
   
    ctx.setCartItems({1: 0, 2: 0, 3: 0, 4: 0})
    localStorage.removeItem("cart");
    setLoginToken(() => null);
    navigate("/Login");
  };
  const userIsLogggedIn = !!loginToken;
  console.log("islog",userIsLogggedIn);
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