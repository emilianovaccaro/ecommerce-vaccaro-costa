import React, {useState, useEffect} from "react";
import { useParams } from 'react-router';
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { catId } = useParams("");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json();
      })
      .then((item)=> {
        const product = item.filter((item) => {
          if(catId === undefined){return item;}
          return item.category === catId;
          })
        setItems(product);
        setIsLoading(false);
      })
      .catch((err) => {console.log(err)})
      }, [catId]);

  return(
    <div>
      {isLoading === true ? (
        <h2>Cargando desde Fake Store API</h2>
      ) 
      : (   <ItemList items={items} />)
      }
    </div>
  );
}

export default ItemListContainer;