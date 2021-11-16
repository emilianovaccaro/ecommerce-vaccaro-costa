import React, {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
import {data} from './data/data';


const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(item, loading);


  const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[4])
    }, 2000)
  });

  useEffect(() => {
    getFetch
    .then((res) => {
      setItem(res)
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
   <ItemDetail item={item} />
  </>
  );
}

export default ItemListContainer;