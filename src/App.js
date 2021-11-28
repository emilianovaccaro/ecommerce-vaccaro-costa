import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/FooterHeader/Header';
import ItemDetailContainer from './components/DetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ListContainer/ItemListContainer';
import Footer from './components/FooterHeader/Footer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Cart/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<> <Header title="shop with us" subtitle=":D"/> <ItemListContainer/> </>}/>
            <Route path='/category/:catId' element={<ItemListContainer/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
