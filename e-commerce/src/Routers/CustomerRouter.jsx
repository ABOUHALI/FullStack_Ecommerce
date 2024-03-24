import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../customer/components/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'
const CustomerRouter = () => {
  return (
    <div>
        <div>
         <Navigation/>
        </div>
        <Routes>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lvlOne/:lvlTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/:product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}></Route>






             {/**<HomePage/> */}
             {/*<Product/>*/}
             {/*<ProductDetails/>*/}
             {/*<Cart/>*/}
             {/*<Checkout/>*/}
             {/*<OrderDetails/> */}
        
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouter