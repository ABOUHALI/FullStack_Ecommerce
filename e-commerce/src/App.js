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
import AdminRouters from './Routers/AdminRouters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './State/Auth/Action';

function App() {
  const {auth}=useSelector((store)=>store);
  const dispatch=useDispatch();
  const jwt =localStorage.getItem("jwt");
  useEffect(()=>{
    if(jwt){dispatch(getUser(jwt))}
    
  },[jwt,dispatch])
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouter/>}/>
        {auth.user?.role==="ADMIN"&& <Route path='/admin/*' element={<AdminRouters/>}></Route>}
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
