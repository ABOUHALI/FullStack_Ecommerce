//import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}/>
      </Routes>

      
      
        {/**<HomePage/> */}
        {/*<Product/>*/}
        {/*<ProductDetails/>*/}
        {/*<Cart/>*/}
        {/*<Checkout/>*/}
        {/*<OrderDetails/> */}
     
      
    </div>
  );
}

export default App;
