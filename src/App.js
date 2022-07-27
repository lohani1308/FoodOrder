//import Cart from "./Components/Cart/CArt";
import {  useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsshown,setCartIsshown]=useState(false);
  
  const showCartHandler=()=>{
    setCartIsshown(true);
  };

  const hideCartHandler=()=>{
    setCartIsshown(false);
  }


  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
