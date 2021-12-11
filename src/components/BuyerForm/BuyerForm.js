import React, { useState, useContext } from 'react';
import Input from '@material-ui/core/Input';
import { Summary, Button, Bottom, SummaryTitle, SummaryItemPrice, SummaryItem, SummaryItemText } from './styledComponents';
import { CartContext }  from "../Context/CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const BuyerForm = () => {
  const prodContext = useContext(CartContext);
  const [nameBuyer, setNameBuyer] = useState('');
  const [phoneBuyer, setPhoneBuyer] = useState(null);
  const [emailBuyer, setEmailBuyer] = useState('');

  const createNewOrder = () => {
    const dbItems = prodContext.cartList.map(item => ({
      id: item.idItem,
      title: item.nameItem,
      price: item.priceItem
    }));

    prodContext.cartList.forEach(async(item) => {
      const itemRef = doc(db, 'product', item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      })
    });

    let order = {
      buyer: {
        name: nameBuyer,
        phone: phoneBuyer,
        email: emailBuyer
      },
      total: prodContext.fullCartPrice(),
      items: dbItems,
      date: serverTimestamp()
    };

    const createFirestoreOrder = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    createFirestoreOrder()
      .then(result => alert('Order ID: ' + result.id))
      .catch(err => console.log(err));
  
    prodContext.removeList();
  
  }

  return(
  <Bottom>
    { prodContext.cartList.length > 0 ? (
    <Summary>
      <form>
        <Input type="text" id="name" placeholder="fullname" onChange={event => setNameBuyer(event.target.value)}/>
        <Input type="text" id="phone" placeholder="phone" onChange={event => setPhoneBuyer(event.target.value)}/>
        <Input type="email" id="email" placeholder="email" onChange={event => setEmailBuyer(event.target.value)}/>
      </form>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>$ {prodContext.fullCartPrice()}</SummaryItemPrice>
        </SummaryItem>
      <Button onClick={createNewOrder}>$ Checkout {prodContext.fullCartPrice()}</Button>
    </Summary> 
    ) : (<div></div>)
    }
  </Bottom>)
};

export default BuyerForm;