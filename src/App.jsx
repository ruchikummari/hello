import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Collection from './pages/Collection.jsx'
import NavBar from './components/NavBar.jsx'
function App() {
  return (
    <div className='px-4 py-1'>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/collection'element={<Collection/>}/>   
        <Route path='/about'element={<About/>}/>        
        <Route path='/contact'element={<Contact/>}/>   
      </Routes>
    </div>
  )
}

export default App;
