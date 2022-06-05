import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
//import ProductItem from './pages/ProductItem';
import Home from './pages/Home';
import Footer from './components/Footer';
//import RequiredAuth from './hoc/RequiredAuth';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
