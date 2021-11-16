import React from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <>
      <DetailContainer>
        <WrapperDetail>
          <ImgContainer>
            <ImageDetail src={item.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.name}</Title>
            <Desc>{item.decription}</Desc>
            <Price>$ {item.price}</Price>
            <Desc>quedan {item.stock} unidades</Desc>
          </InfoContainer>
          <ItemCount stock={item.stock}/>
        </WrapperDetail>
      </DetailContainer>
    </>
  )
};

export default ItemDetail;