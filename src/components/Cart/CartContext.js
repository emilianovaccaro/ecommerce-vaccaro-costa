import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let findProd = cartList.find(oneItem => oneItem.idItem === item.id);
    if (findProd === undefined){
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
        return findProd.qtyItem += qty;
      }
  };

  const removeList = () => {
    setCartList([]);
  }

  const deleteItem = (id) => {
    let product = cartList.filter(item => item.idItem !== id);
    setCartList(product);
  }

  const totalItemPrice = (idItem) => {
    let i = cartList.map(item => item.idItem).indexOf(idItem);
    return cartList[i].priceItem * cartList[i].qtyItem;
  };

  const fullCartPrice = () => {
    let totalPrice = cartList.map(item => totalItemPrice(item.idItem));
    let prices = totalPrice.reduce((prev, curr) =>  prev + curr);
    return prices.toFixed(2);
  };

  return (
    <>
      <CartContext.Provider value={{
        cartList,
        addItem,
        removeList, 
        deleteItem,
        totalItemPrice,
        fullCartPrice
      }}>
        {children}
      </CartContext.Provider>
    </>
  )
};


export default CartContextProvider;
