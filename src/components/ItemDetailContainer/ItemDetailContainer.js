import React, {useState, useEffect} from "react";
import {useParams} from 'react-router';
import ItemDetail from '../Item/ItemDetail';
import { productosOne, /* firestoreFetch */ } from '../../utils/firestoreFetch';
import CircularProgress from "@material-ui/core/CircularProgress";
import {Center} from './styledComponents';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    productosOne(productId)
    .then((res) => {
      setItem(res);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, [productId]);

  
  //USANDO FIND DENTRO DEL ARRAY DE OBJETOS COMPLETO
      /* useEffect(() => {
          firestoreFetch()
            .then((res) => {
              const producto = res.find(prod => productId === prod.id)
              setItem(producto);
              setIsLoading(false);
            })
            .catch(err => console.log(err))
          }, [productId]);
   */

  return(
    <div>
    {
    isLoading === true ? (<div>
        <Center>
          <CircularProgress></CircularProgress>
          <h2>Cargando desde Fake Store API</h2>
        </Center>
        </div>
    ) : (
      <ItemDetail item={item} />
    )
  }
    </div>
  );
}

export default ItemListContainer;