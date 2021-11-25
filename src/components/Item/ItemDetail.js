import React, { useState } from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ProductAmountContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import ItemCount from '../ItemCounter/ItemCount';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const ItemDetail = ({ item }) => {

  let {id, image, title, description, price, category} = item;


  const [addProduct, setAddProduct] = useState(0);

  const updateQty = (quantity) => {
    setAddProduct(addProduct + quantity);
  };

  console.log(addProduct);


  return (
    <div key={id}>
      <DetailContainer>
        <WrapperDetail>
          <ImgContainer>
            <ImageDetail src={image}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{title}</Title>
            <p>{category}</p>
            <Desc>{description}</Desc>
            <Price>$ {price}</Price>
          </InfoContainer>
          {addProduct >= 1 ? (
            <ProductAmountContainer>
              <Link to="/cart">
                <Button variant="contained" color="primary">Cart</Button>
              </Link>
              <Link to="/">
                <Button variant="contained" color="secondary">Home</Button>
              </Link>
            </ProductAmountContainer>
          ) : (
            <ItemCount 
              item={item}
              stock={10}
              initial={0}
              updateQty={updateQty}
            />
          )}
          
        </WrapperDetail>
      </DetailContainer>
    </div>
  )
};

export default ItemDetail;