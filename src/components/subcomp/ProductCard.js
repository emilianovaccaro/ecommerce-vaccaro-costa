import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

function ProductCard(props){
  return (
    <div class="col mb-5">
      <div class="card h-100">
          <img class="card-img-top" src={props.image} alt="..." />
          <div class="card-body p-4">
              <div class="text-center">
                  <h5 class="fw-bolder">{props.name}</h5>
                  {props.price}
              </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="!#">View</a></div>
              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="!#">Add to cart</a></div>
          </div>
      </div>
    </div>
  )
};

export default ProductCard;