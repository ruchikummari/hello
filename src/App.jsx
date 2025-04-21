import { Route, Routes } from 'react-router-dom'
import NavBar from './components/header/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
function App() {
  return (
    <div className='px-4 py-1'>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>        
        <Route path='/contact'element={<Contact/>}/>   
      </Routes>
    </div>
  )
}

export default App
