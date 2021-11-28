import React from "react";
import ItemC from "../Item/ItemC";
import { ProductsContainer } from './styledComponents';

function ItemList({items}) {
  return (
    <ProductsContainer>
      {items.map(item=> <ItemC item={item} key={item.id} /> )}
    </ProductsContainer>
  )
}

export default ItemList;