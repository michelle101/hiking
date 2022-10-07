
import { BrowserRouter, NavLink,Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'

import logo from  './img/logo.png'
import riptop from './img/rip_top.png'

function App() {
  let activeClassName = 'nav-active'
  return (
    <div className="App">
    <BrowserRouter>
      <div className ="menu">
        <div className="menu-wrapper">
          <div className="logo"><NavLink to="/home"><img src={logo} alt='' /></NavLink></div>
          <div className="main-menu">
            <ul>
              <li><NavLink to="hiking/" className={({isActive})=> isActive && activeClassName}>Home </NavLink><span></span></li>
              <li><NavLink to="hiking/store" className={({isActive})=> isActive && activeClassName}>Store </NavLink><span></span></li>
              <li><NavLink to="hiking/our-story" className={({isActive})=> isActive && activeClassName}>Our Story</NavLink><span></span></li>
              <li><NavLink to="hiking/contact-us" className={({isActive})=> isActive && activeClassName}>Contact Us</NavLink><span></span></li>
            </ul>
          </div>
          <div className="search-box"><input type='search' /></div>
        </div>
      <img className='riptop' src={riptop} allt='' />
      </div>
      <div className="main-content">
      <Routes>
        <Route path='hiking/' element={<Home  />} />
        <Route path='hiking/store' element={<Home  />} />
        <Route path='hiking/our-story' element={<Home  />} />
        <Route path='hiking/contact-us' element={<Home  />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
