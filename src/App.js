//import Cart from "./Components/Cart/CArt";
import { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {

  const [cartIsshown,setCartIsshown]=useState(false);
  
  const showCartHandler=()=>{
    setCartIsshown(true);
  };

  const hideCartHandler=()=>{
    setCartIsshown(false);
  }


  return (
    <Fragment>
      {cartIsshown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
