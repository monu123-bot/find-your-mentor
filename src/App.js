import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/common/nav';
import Mentor from './components/mentors';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
function App() {
  return (
   <>
<BrowserRouter>
<Navbar1/>
   
<Routes>

  <Route path="/" element={<Home />} />
  <Route path="/mentor" element={<Mentor />} />
  {/* <Route path="/todo" element={<Todo />} /> */}
  

</Routes>
 
    </BrowserRouter>




   {/* <Homenav/> */}
  
   
   
   </>
  );
}

export default App;
