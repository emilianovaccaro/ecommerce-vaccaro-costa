import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let findProd = cartList.find(item => item.idItem === item.id);
    if ( findProd === undefined){
      setCartList([
        ...cartList, 
        {
          idItem: item.id,
          nameItem: item.title,
          imageItem: item.image,
          priceItem: item.price,
          qtyItem: qty,
        },
      ])
    } else {
        findProd.qtyItem += qty;
      }
  };

  const removeList = () => {
    setCartList([]);
  }

  const deleteItem = (id) => {
    let product = cartList.filter(item => item.idItem !== id);
    setCartList(product);
  }

  return (
    <>
      <CartContext.Provider value={{
        cartList,
        addItem,
        removeList, 
        deleteItem, 
      }}>
        {children}
      </CartContext.Provider>
    </>
  )
};


export default CartContextProvider;
