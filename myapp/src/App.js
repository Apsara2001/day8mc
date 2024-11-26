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
