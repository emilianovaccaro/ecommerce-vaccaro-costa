import React from "react";
import ItemC from "../Item/ItemC";
import { ProductsContainer } from './styledComponents';

function ItemList({items}) {
  return (
    <ProductsContainer>
      {items.map(item=> <ItemC title={item.title}
        key={item.id}
        id={item.id}
        price={item.price}
        stock={item.stock}
        image={item.image}
        description={item.description}
        category={item.category}/> )}
    </ProductsContainer>
  )
}

export default ItemList;