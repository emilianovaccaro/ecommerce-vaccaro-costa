import React from 'react';
import { Badge } from "@material-ui/core";
import { Icon } from './styledComponents';
import { ShoppingCartOutlined } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Icon style={{cursor: "pointer"}}>
            <Badge badgeContent={1} color="secondary">
                <ShoppingCartOutlined />
            </Badge>
        </Icon>
    );
}

export default CartWidget;