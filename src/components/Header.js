import React from 'react';


const Header = (props) => {
  return(
    <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder"  id="h1white">{props.greeting}</h1>
            <p class="lead fw-normal text-white-50 mb-0">123123</p>
        </div>
    </div>
    </header>
  )
}

export default Header;