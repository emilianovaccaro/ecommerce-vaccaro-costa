import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/FooterHeader/Header';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import ItemListContainer from './components/Container/ItemListContainer';
import Footer from './components/FooterHeader/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<> <Header title="shop with us" subtitle=":D"/> <ItemListContainer/> </>}/>
        <Route path='/category/:catId' element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
