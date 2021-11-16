import React from "react";
import ItemC from "./ItemC";
import { ProductsContainer } from './styledComponents';

function ItemList({items}) {
  return (
    <ProductsContainer>
          {items.map(item=> <ItemC item={item} /> )}
    </ProductsContainer>
  )
}

export default ItemList;