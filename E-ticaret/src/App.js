
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import {Register} from './Pages/Register';

//Demir Dinçtürk E-ticaret sitesi.
//https://github.com/DemirNtintstourk

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="product" element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path= '/Cart' element={<Cart/>}/>
        <Route path= '/Login' element={<LoginSignup/>}/>
      </Routes>      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
