import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
 
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop"; //
import { About } from "./pages/About"; //
import { Cart } from "./pages/cart/cart"; //
import { ShopContextProvider } from "./context/shop-context";
import { Home } from "./pages/Home";
import { Contact } from "./pages/contact/Contact";
import { Product_page } from "./pages/Products/Product_page";
import ContextProvider from "./context/ContexProvider";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <ContextProvider>
          <Navbar />
          <Routes>
             
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Shop />} />
            <Route path = "/Product_page/:productId" element={<Product_page/>}/>
            
            <Route path="/About" element={<About />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path ="/Login" element={<AuthForm/>}/>
          </Routes>
        </ContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
