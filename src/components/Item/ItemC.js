import React from "react";
import { Link } from 'react-router-dom';
import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';


function ItemC({ image, title, stock, price, id, slug }) {
  return (
    <div>
    <ProductContainer>
        <Circle/>
        <Image src={image}/>
        <Info>
            <p>{title}</p>
            <Icon>
                <LocalOfferOutlined /><strong>$ {price}</strong>
            </Icon>
            <Icon>
                <DescriptionOutlined />{stock} available.
            </Icon>
            <Icon style={{cursor: "pointer"}}>
                <Link to={`/item/${id}/${slug}`}><InfoOutlined />Details</Link>
            </Icon>
        </Info>
    </ProductContainer>
    </div>
);
}

export default ItemC;