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

function App() {
  return (
    <div className="">
      <Navigation/>
       <div>
        {/**<HomePage/> */}
        {/*<Product/>*/}
        {/*<ProductDetails/>*/}
        {/*<Cart/>*/}
        {/*<Checkout/>*/}
        <OrderDetails/>
       </div> 
       <Footer/>
    </div>
  );
}

export default App;
