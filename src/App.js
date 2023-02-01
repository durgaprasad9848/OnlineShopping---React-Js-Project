
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";//
import { About } from "./pages/About";//
import { Cart } from "./pages/cart/cart";//
import { ShopContextProvider } from "./context/shop-context";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;