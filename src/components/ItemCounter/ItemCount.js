import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons'
import { ProductAmountContainer, ProductAmount } from './styledComponents';


const ItemCount = ({item, stock, initial, updateQty}) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if(quantity < stock ){
    setQuantity(quantity+1);
    }
  };

  const decrement = () => {
    if(quantity > 0){
    setQuantity(quantity-1);
    }
  };
/* 
  const addToCart = () => {
    onAdd(quantity);
  }; */

  const onAdd= () => {
    if(quantity >=1 ){
      /* addToCart(item, quantity); */
      updateQty(quantity);
      setQuantity(0);
    }
  }

  return(
    <ProductAmountContainer>
      <Button variant="text" onClick={increment}><Add /></Button>
        <ProductAmount>{quantity}</ProductAmount>
      <Button variant="text" onClick={decrement}><Remove /></Button>
      <Button variant="contained" color="primary" onClick={onAdd}>Add to Cart</Button>
    </ProductAmountContainer>
  )
};

export default ItemCount;