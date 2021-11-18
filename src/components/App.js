import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:catId' element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
