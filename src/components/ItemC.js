import React from "react";
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';

function ItemC({ item }) {
  return (
    <ProductContainer>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <LocalOfferOutlined /><strong>$ {item.price}</strong>
            </Icon>
            <Icon>
                <DescriptionOutlined />{item.stock} unid.
            </Icon>
            <Icon style={{cursor: "pointer"}}>
                <InfoOutlined />Details
            </Icon>
        </Info>
    </ProductContainer>
);
}

export default ItemC;