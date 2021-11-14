import React from "react";
import ItemC from "./ItemC";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemList({items}) {
  return (
      <div>
          {items.map(item=> <ItemC item={item} /> )}
      </div>
  )
}

export default ItemList;