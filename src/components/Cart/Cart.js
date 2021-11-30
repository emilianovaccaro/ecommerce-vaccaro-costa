import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext }  from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Top, TopButton, TopText,Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice,
 Summary, Button, Bottom, SummaryTitle, SummaryItemPrice, SummaryItem, SummaryItemText } from './styledComponents';

const Cart = () => {
const prodContext = useContext(CartContext);

return (
  <WrapperCart>
    <TitleCart>MY CART</TitleCart>
      <Top>
        <Link to='/'>
          {
          (prodContext.cartList.length > 0)
          ? <TopButton type="filled" onClick={prodContext.removeList}>DELETE ALL PRODUCTS</TopButton>
          : <TopText></TopText>
          }
        </Link>
      </Top>
    <ContentCart>
      {
      prodContext.cartList.length > 0 ? 
      prodContext.cartList.map
        (item => 
        <Product key={item.idItem}>
          <ProductDetail>
            <ImageCart src={item.imageItem} />
            <Details>
              <span>
              <b>Product:</b> {item.nameItem}
              </span>
              <TopButton type="filled" onClick={() => prodContext.deleteItem(item.idItem)}>DELETE</TopButton>
            </Details>
          </ProductDetail>
          <PriceDetail>
            <ProductAmountContainer>
              <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
            </ProductAmountContainer>
              <ProductPrice>$ {item.priceItem} each</ProductPrice>
              <ProductPrice>$ {prodContext.totalItemPrice(item.idItem)} total for product</ProductPrice>
          </PriceDetail>
        </Product>
        )
        : 
        <Link to="/"><TitleCart>Check available products</TitleCart></Link>
      }
      <Bottom>
        { prodContext.cartList.length > 0 ? (
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {prodContext.fullCartPrice()}</SummaryItemPrice>
            </SummaryItem>
          <Button>$ Checkout {prodContext.fullCartPrice()}</Button>
        </Summary> 
        ) : (<div></div>)
        }
      </Bottom>
    </ContentCart>
  </WrapperCart>
);
}

export default Cart;