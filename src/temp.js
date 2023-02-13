
import "./App.css";
import {
  
  Routes,
  Route,
  createBrowserRouter,
  BrowserRouter,
 
} from "react-router-dom";
 
import { useContext } from "react";

import {App1} from "./App1";
import {App2} from "./App2";
import {Appnav} from "./Appnav";
 
function App() {


  
  
  return (
    <div className="App">
  
     
      <Appnav/>
      <Routes>
        <Route path="/App1" element={<App1/>}/>
        <Route path="/App2" element={<App2/>}/>
      </Routes>
   
    </div>
  );
}

export default App;















