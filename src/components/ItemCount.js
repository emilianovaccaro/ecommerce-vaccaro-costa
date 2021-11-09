import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const ItemCount = () => {
  const item = {
    stock:5,
    initial: 1,
  }
  const [quantity, setQuantity] = useState(item.initial);
  const increment = () => {
    if(item.stock > quantity){
    setQuantity(quantity+1);
    }
  };

  const decrement = () => {
    if(quantity>1){
    setQuantity(quantity-1);
    }
  };

  if(!item.stock){
    return(
      <div class="text-center"><span>Stock Agotado</span></div>
    );
  }else{
    return(
      <div class="text-center">
        <button class="btn btn-outline-dark mt-auto" onClick={decrement}>-</button>
        <span class="btn btn-outline">{quantity}</span>
        <button class="btn btn-outline-dark mt-auto" onClick={increment}>+</button>
        <a class="btn btn-outline-dark mt-auto" href="!#">Add to cart</a>
      </div>
    );
  }
}

export default ItemCount;