import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

function MealItemForm(props) {
  const [amountIsValid,setamountIsValid]=useState(true);

  const amountInputref=useRef();

  const submitHandler=(event)=>{
    event.preventDefault();

    const enteredAmount=amountInputref.current.value;
    const enteredAmountNumber= +enteredAmount;

    //console.log(amountIsValid);
    if(enteredAmount.trim().length===0 || enteredAmountNumber <1 || enteredAmountNumber>5){
      setamountIsValid(false);
      return;
    }

   // console.log(enteredAmountNumber);
    props.onAddtoCart(enteredAmountNumber);//passing to parent

  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputref}
            label="Amount" 
            input={{
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>

        {!amountIsValid && <p>Please Enter a Valid Amount (1-5)</p>}
    </form>
  )
}

export default MealItemForm