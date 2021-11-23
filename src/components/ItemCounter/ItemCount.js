import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons'
import { ProductAmountContainer, ProductAmount } from './styledComponents';


const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial);
  const [changeBtn, setChangeBtn] = useState(true)

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

  const addToCart = () => {
    onAdd(quantity);
    setChangeBtn(false);
  };

  return(
    <ProductAmountContainer>
        <Button variant="text" onClick={increment}><Add /></Button>
        <ProductAmount>{quantity}</ProductAmount>
        <Button variant="text" onClick={decrement}><Remove /></Button>
      {
        changeBtn
        ? <Button variant="contained" color="primary" onClick={addToCart}>Add to Cart</Button>
        : 
        <div>
          <Link to="/cart">
            <Button variant="contained" color="primary">Cart</Button>
          </Link>
          <Link to="/">
            <Button variant="contained" color="secondary">Seguir Comprando</Button>
          </Link>
        </div>
      }

    </ProductAmountContainer>
  )
};

export default ItemCount;