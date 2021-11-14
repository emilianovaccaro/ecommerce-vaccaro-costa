import React, {useState, useEffect} from "react";
import ItemList from './ItemList';
import {getFetch} from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(items, loading);

  useEffect(() => {
    getFetch
    .then((res) => {
      setItems(res)
      setLoading(false)
    })
  }, []);

  if(loading){
    return(
      <div>
        <h2>loading...</h2>
      </div>
    )
  };

  return (    
  <>
    <div>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <ItemList items={items} />
                </div>
            </div>
        </section>
    </div>
  </>
  );
}

export default ItemListContainer;