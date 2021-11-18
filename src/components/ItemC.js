import React from "react";
import { Link } from 'react-router-dom';
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';


function ItemC({ item }) {
  return (
    <ProductContainer>
        <Circle/>
        <Image src={item.image}/>
        <Info>
            <p>{item.title}</p>
            <Icon>
                <LocalOfferOutlined /><strong>$ {item.price}</strong>
            </Icon>
            <Icon>
                <DescriptionOutlined />
            </Icon>
            <Icon style={{cursor: "pointer"}}>
                <Link to={`/item/${item.id}`}><InfoOutlined />Details</Link>
            </Icon>
        </Info>
    </ProductContainer>
);
}

export default ItemC;