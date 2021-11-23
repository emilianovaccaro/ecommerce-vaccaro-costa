import React from "react";
import ItemC from "../Item/ItemC";
import { ProductsContainer } from './styledComponents';

function ItemList({items}) {
  return (
    <ProductsContainer>
      {items.map(item=> <ItemC item={item} /> )}
    </ProductsContainer>
  )
}

export default ItemList;