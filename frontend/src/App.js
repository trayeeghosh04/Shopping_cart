import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <ToastContainer/>
        <NavBar/>
         <Routes>
          <Route path='/cart' Component={Cart}/>
          <Route path='/' Component={Home}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
