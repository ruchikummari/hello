import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Collection from './pages/Collection.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx'
import Order from './pages/Order.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Cart from './pages/Cart.jsx'
import { Toaster } from 'sonner';
function App() {
  return (
    <div className='flex-grow px-4 py-1 pt-20'>
      <Toaster richColors/>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/collection'element={<Collection/>}/>   
        <Route path='/about'element={<About/>}/>        
        <Route path='/contact'element={<Contact/>}/> 
        <Route path='/login'element={<Login/>}/> 
        <Route path='/place-order'element={<PlaceOrder/>}/>
        <Route path='/orders'element={<Order/>}/>
        <Route path='/cart'element={<Cart/>}/>  
        <Route path='/Product/:productId'element={<Product/>}/> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
