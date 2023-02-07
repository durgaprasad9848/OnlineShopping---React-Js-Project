
import product1 from "../src/assets/One.png";
import product2 from "../src/assets/Two.png";
import product3 from "../src/assets/Three.png";
import product4 from "../src/assets/Four.png";

 

import bwimage1 from "./assets/Images/BLACK_WHITE/image1.jpg";
import bwimage2 from "./assets/Images/BLACK_WHITE/image2.jpg";
import bwimage3 from "./assets/Images/BLACK_WHITE/image3.jpg";

import bimage1 from "./assets/Images/BLUE/image1.jpg";
import bimage2 from "./assets/Images/BLUE/image2.jpg";
import bimage3 from "./assets/Images/BLUE/image3.jpg";

import rbimage1 from "./assets/Images/RED_BLUE/image1.jpg";
import rbimage2 from "./assets/Images/RED_BLUE/image2.jpg";
import rbimage3 from "./assets/Images/RED_BLUE/image3.jpg";

import ybmage1 from "./assets/Images/YELLOW_BLACK/image1.jpg";
import ybimage2 from "./assets/Images/YELLOW_BLACK/image2.jpg";
import ybimage3 from "./assets/Images/YELLOW_BLACK/image3.jpg";
 

export const PRODUCTS = [
  {
    id: 1,
    productName: "Colors",
    price: 100,
    productImage: product1,
    extraImages:[rbimage1,rbimage2,rbimage3],
    review:"It is Red Blue Black are nice colors and i recomand it",
    
  },
  {
    id: 2,
    productName: "Black and white Colors",
    price: 50,
    productImage: product2,
    extraImages :[bwimage1,bwimage2,bwimage3],
    review:"Black and white Colors are nice colors and i recomand it",
    
  },
  {
    id: 3,
    productName: "Yellow and Black Colors",
    price: 70,
    productImage: product3,
    extraImages:[ybmage1,ybimage2,ybimage3],
    review:"Yellow and Black Colors are nice colors and i recomand it",
  },
  {
    id: 4,
    productName: "Blue Color",
    price: 100,
    productImage: product4,
    extraImages:[bimage1,bimage2,bimage3],
    review:"Blue is nice colors and i recomand it",
  }
];