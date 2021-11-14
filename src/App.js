import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
  
//las propiedades son xxx="" nombre="" etc=""

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <Footer />
    </>
  );
};

export default App;
