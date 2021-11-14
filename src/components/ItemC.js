import React from "react";
import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemC({ item }) {
  return (
<div class="col mb-5">
      <div class="card h-100">
          <img class="card-img-top" src={item.img} alt="..." />
          <div class="card-body p-4">
              <div class="text-center">
                  <h5 class="fw-bolder">{item.name}</h5>
                  {item.price}
              </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <ItemCount stock={item.stock}/> {/* ACA VA EL CONTADOR */}
          </div>
      </div>
    </div>
  )
};

export default ItemC;