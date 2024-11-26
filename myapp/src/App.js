import logo from './logo.svg';

import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from './componets/Home'
import AboutUs from './componets/AboutUs'
import ContactUs from './componets/ContactUs'

function App() {
  return (
    <div className="App">
     <Router>
     <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
