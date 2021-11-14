import React, { useState } from "react";


const ItemCount = ({stock}) => {

  let [quantity, setQuantity] = useState(0);

  const increment = () => {
    if(stock > quantity){
    setQuantity(quantity+1);
    }
  };

  const decrement = () => {
    if(quantity > 0){
    setQuantity(quantity-1);
    }
  };

  const onAdd = () => {
    if (quantity >= 1) {
      alert(`Añadiste ${quantity} productos al carrito.`);
      setQuantity((quantity = 0));
    } else {
      alert(`Se tiene que agregar al menos un producto.`);
    }
  };


  if(stock <= 0){
    return(
      <div className="text-center"><span>Stock Agotado</span></div>
    );
  }else{
    return(
      <div className="text-center">
        <button className="btn btn-outline-dark mt-auto" onClick={decrement}>-</button>
        <span className="btn btn-outline">{quantity}</span>
        <button className="btn btn-outline-dark mt-auto" onClick={increment}>+</button>

        <div className="card-footer cardFooterItemCount pt-3 pb-0">
          <button type="button" className="btn shadow-sm mainBtn addToCart"  onClick={onAdd}>Agregar</button>
        </div>
      </div>
    );
  }
}

export default ItemCount;