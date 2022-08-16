import React, { useContext } from 'react'
import CartContext from '../../store/Card-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {

  //using context
  const cartCtx=useContext(CartContext);

  //console.log(cartCtx);

  //to show total items in cart 
  const numberOdCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount;
  },0);

  //console.log(cartCtx.items)

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOdCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton