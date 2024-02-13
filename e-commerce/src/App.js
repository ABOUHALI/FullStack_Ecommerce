import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation/>
       <div>
        <HomePage/>
       </div> 
       <Footer/>
    </div>
  );
}

export default App;
