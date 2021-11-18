import React, {useState, useEffect} from "react";
import {useParams} from 'react-router';
import ItemDetail from './ItemDetail';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((product) => {
      const prod = product.find(item => item.id === parseInt(productId))
      setItem(prod);
      setIsLoading(false)
    })
    .catch((err) => {console.log(err)})
  }, [productId]);

  return(
    <div>
    {
    isLoading === true ? (
      <h2>Cargando desde Fake Store API</h2>
    ) : (
      <ItemDetail item={item} />
    )
  }
    </div>
  );
}

export default ItemListContainer;