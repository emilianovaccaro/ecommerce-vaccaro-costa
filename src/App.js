import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
  
//las propiedades son xxx="" nombre="" etc=""

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/*       <ItemListContainer /> */}
      <Footer />
    </>
  );
};

export default App;
