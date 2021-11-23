import React from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import ItemCount from '../ItemCounter/ItemCount';

const ItemDetail = ({ item }) => {

  const onAdd=(quantity)=>{
    console.log(`add  ${quantity} products`);
    console.log("id", item.id);
  }


  return (
    <>
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
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </WrapperDetail>
      </DetailContainer>
    </div>
    </>
  )
};

export default ItemDetail;