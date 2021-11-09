import React from "react";
import ProductCard from "./ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const ItemListContainer = () => {
  return( 
    <>
      <div>
      <section class="py-5">
              <div class="container px-4 px-lg-5 mt-5">
                  <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                      <ProductCard name="Short" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Pantalon" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Remera de Tinelli" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Short" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Buzo Pro" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Buzo Flow" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Buzo Pro Green" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Remera Messi 30" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Short Messi 30" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                      <ProductCard name="Medias de Ruggeri" price="$80.00" image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                  </div>
              </div>
          </section>
      </div>
    </>
  )
};


export default ItemListContainer;