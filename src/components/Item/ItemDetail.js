import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { DetailContainer, WrapperDetail, ImgContainer, ProductAmountContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import ItemCount from '../ItemCounter/ItemCount';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const [changeBtn, setChangeBtn] = useState(true);
  const prodContext = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    if(quantity > 0){
      prodContext.addItem(item, quantity);
      setChangeBtn(false);
    }
  };

  return (
    <div key={item.id}>
      <DetailContainer>
        <WrapperDetail>
          <ImgContainer>
            <ImageDetail src={item.image}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <p>{item.category}</p>
            <Desc>{item.description}</Desc>
            <Price>$ {item.price}</Price>
          </InfoContainer>
          {!changeBtn ? (
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
              stock={item.stock}
              initial={0}
              onAdd={onAdd}
            />
          )}
          
        </WrapperDetail>
      </DetailContainer>
    </div>
  )
};

export default ItemDetail;