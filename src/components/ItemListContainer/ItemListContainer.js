import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import ItemList from './ItemList';
import { firestoreFetch } from '../../utils/firestoreFetch';
import CircularProgress from "@material-ui/core/CircularProgress";
import { Center } from './styledComponents';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { catId } = useParams();

  //didUpdate
  useEffect(() => {
    firestoreFetch(catId)
    .then((res) => {
      setIsLoading(false);
      setItems(res);
    })
    .catch(err => console.log(err))
  }, [catId]);

  //unmount
  useEffect(() => {
    return (() => {
        setItems([]);
    })
  }, []);

  return(
    <div>
      {isLoading === true ? (<div>
        <Center>
          <CircularProgress></CircularProgress>
          <h2>Cargando desde Fake Store API</h2>
        </Center>
        </div>
      ) 
      : ( <ItemList items={items} />)
      }
    </div>
  );
}

export default ItemListContainer;