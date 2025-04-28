import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Collection from './pages/Collection.jsx'
import NavBar from './components/NavBar.jsx'
function App() {
  return (
    <div className='px-4 py-1 pt-20'>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/collection'element={<Collection/>}/>   
        <Route path='/about'element={<About/>}/>        
        <Route path='/contact'element={<Contact/>}/>   
        <Route path='/Product/:productId'element={<Product/>}/> 
      </Routes>
    </div>
  )
}

export default App;
