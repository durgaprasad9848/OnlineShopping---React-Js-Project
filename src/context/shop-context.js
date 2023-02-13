import { createContext, useEffect, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null);





const getDefaultCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"))
  
  return cart;
};



// const getDefaultCart = async () => {
//   let cart = {};
//   const data = await fetch(
//     `https://test-api-c7d27-default-rtdb.firebaseio.com/cart.json`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       for (let i = 1; i < 5; i++) {
//         cart[i] = data[i];
//       }
   
// })
//   return cart;
// };





export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const[TpState,setTpState] = useState(true);
   
  



 
      useEffect(()=>{
      
        const postrequsthandler=async()=> {
          const response = await fetch(
            `https://test-api-c7d27-default-rtdb.firebaseio.com/${localStorage.getItem("email")}.json`,
            {
              method: "PUT",
              body: JSON.stringify(cartItems),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const result = await response.json();
          console.log(result);
            localStorage.setItem("cart",JSON.stringify(cartItems));
            console.log("local",  JSON.parse(localStorage.getItem("cart")));
   
        
        }
        postrequsthandler();
   

      },[TpState]);
      
  

   
    
 








   

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    console.log(itemId);
   
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  
    setTpState((TpState)=>!TpState);
    console.log("cart items",cartItems);
  };




  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setTpState((TpState)=>!TpState);
    console.log("cart items",cartItems);
  };






  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    setTpState((TpState)=>!TpState);
   
    console.log("cart items",cartItems);
  };





  const checkout = () => {
    setCartItems(getDefaultCart());
    setTpState((TpState)=>!TpState);
  };

  const totalCartCount = () => {
    let totalcount = 0;
      for(const item in cartItems){
        totalcount+=cartItems[item];
      }
   
    return totalcount;
  }

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    totalCartCount,
    setCartItems,





  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

 