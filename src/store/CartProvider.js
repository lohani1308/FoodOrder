//Goal of this component is simply to manage the current contextto data
//and provide that contextto all other components which are required.

import React, { useReducer } from 'react'
import CartContext from './Card-context'


const defaultCartstate={
    items:[],
    totalAmount:0
};

const cartReducer=(state,action)=>{
    //console.log(state);
    //console.log(action);
    if(action.type==='ADD'){
        const exsistingCartItemsIndex=state.items.findIndex((item)=>item.id===action.item.id)
        //console.log(exsistingCartItemsIndex);
        const exisitingCartItem=state.items[exsistingCartItemsIndex];
        let updatedItem;
        let updatedItems;

        if(exisitingCartItem){
            updatedItem={
                ...exisitingCartItem,
                amount:exisitingCartItem.amount+action.item.amount
            };

            updatedItems=[...state.items];
            updatedItems[exsistingCartItemsIndex]=updatedItem;
        }
        else{
            updatedItems=state.items.concat(action.item);
        }
        const updatedTotalAmount=state.totalAmount + action.item.price*action.item.amount;
        
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }

    if(action.type==='REMOVE'){
        const exsistingCartItemsIndex=state.items.findIndex((item)=>item.id===action.id);
        const exisitingCartItem=state.items[exsistingCartItemsIndex];

        const updatedTotalAmount=state.totalAmount-exisitingCartItem.price;
        let updatedItems;

        if(exisitingCartItem.amount===1){
            updatedItems=state.items.filter(item=>item.id!=action.id);
        }else{
            const updatedItem={...exisitingCartItem,amount:exisitingCartItem.amount-1};
            updatedItems=[...state.items];
            updatedItems[exsistingCartItemsIndex]=updatedItem;
        }

        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }

    return defaultCartstate;
};

function CartProvider(props) {

const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartstate);

const addItemFromCartHandler=(item)=>{
    dispatchCartAction({type:'ADD',item:item});
}

const removeItemFromCartHandler=(id)=>{
    dispatchCartAction({type:'REMOVE',id:id});
}

const Cartcontext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:addItemFromCartHandler,
    removeItem:removeItemFromCartHandler
};
  return (
    <CartContext.Provider value={Cartcontext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;