import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';
import Auth from './component/Auth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/product/:id' element={<Product/>} />
        <Route exact path='/about' element={<About/>} />
        <Route path="/auth" element={<Auth />} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
    </div>

  );
}

export default App;
