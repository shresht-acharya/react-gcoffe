
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu'

function App() {
  return (
   <div className='App'>
    <Router>
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu' element={<Menu/>} />

      </Routes>
      <Footer />
    </Router>
   </div>
  );
}

export default App;
