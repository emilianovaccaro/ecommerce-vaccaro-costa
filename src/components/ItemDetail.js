import React from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <>
      <DetailContainer>
        <WrapperDetail>
          <ImgContainer>
            <ImageDetail src={item.image}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.name}</Title>
            <Desc>{item.decription}</Desc>
            <Price>$ {item.price}</Price>
            <Desc>quedan {item.stock} (fake store api no tiene stock, hay que poner uno propio luego) unidades</Desc>
          </InfoContainer>
          <ItemCount stock={5}/>
        </WrapperDetail>
      </DetailContainer>
    </>
  )
};

export default ItemDetail;