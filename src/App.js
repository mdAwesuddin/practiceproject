import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap/js/dist/dropdown.js"
import "../node_modules/bootstrap/js/dist/offcanvas.js"
import "../node_modules/bootstrap/js/dist/offcanvas.js.map"
import "../node_modules/bootstrap/js/dist/collapse.js"
import "../node_modules/bootstrap/js/dist/carousel.js"
import {Route,Routes} from "react-router-dom"
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Menspage from './Components/Menspage';
import Mshirts from './Components/Mshirts'
import Mjeans from './Components/Mjeans';
function App() {
  return (
  //  <h1>hello</h1>
  <>
  <Navbar/>
   <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='/mens' element={<Menspage/>}/>
   <Route path='/mshirts' element={<Mshirts/>}/>
   <Route path='/mjeans' element={<Mjeans/>}/>
  </Routes>
  </>
  );
}

export default App;
