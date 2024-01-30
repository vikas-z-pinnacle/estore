import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import Category from './pages/Category.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Auth from './pages/Auth.jsx';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<Category category='men' />} />
            <Route path='/women' element={<Category category='women' />} />
            <Route path='/kids' element={<Category category='kids' />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
