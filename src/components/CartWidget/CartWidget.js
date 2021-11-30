import React, {useContext} from 'react';
import { Badge } from "@material-ui/core";
import { Icon } from './styledComponents';
import { ShoppingCartOutlined } from "@material-ui/icons";
import {CartContext} from '../Cart/CartContext';

const CartWidget = () => {
  const badge = useContext(CartContext);

  return (  
    <div>
      {
        badge.cartList.length > 0 ?
          (
          <Icon style={{cursor: "pointer"}}>
            <Badge badgeContent={badge.cartList.length} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </Icon>
          ) : (<div></div>)
      }
    </div>
  );
}

export default CartWidget;