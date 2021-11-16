import React, {useState, useEffect} from "react";
import ItemList from './ItemList';
import {data} from './data/data';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(items, loading);


  const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  });

  useEffect(() => {
    getFetch
    .then((res) => {
      setItems(res)
      setLoading(false)
    })
    .catch((err)=>{console.log(err)})
  });

  if(loading){
    return(
      <div>
        <h2>loading...</h2>
      </div>
    )
  };
  
  return (    
  <> 
   <ItemList items={items} />
  </>
  );
}

export default ItemListContainer;