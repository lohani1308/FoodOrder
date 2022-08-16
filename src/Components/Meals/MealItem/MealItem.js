
import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/Card-context'

function MealItem(props) {

const cartCtx=useContext(CartContext);

const price=`$${props.price.toFixed(2)}`//for formating to 2 decimal 

//getting this data from AvailableMealItem component as props
const addTOCardtHandler=amount=>{

    //console.log(amount);
    //console.log(props);
    cartCtx.addItem(
        {
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
    });

    //console.log(cartCtx.items);
};
  
return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>    
        </div>
        <div>
            <MealItemForm id={props.id} onAddtoCart={addTOCardtHandler}/>
        </div>
    </li>
  )
}

export default MealItem