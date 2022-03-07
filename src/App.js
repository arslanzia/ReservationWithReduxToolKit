
import './App.css';
import Home from './components/Home';
import Reservations from './components/Reservations';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
 <>
   <Routes>
        <Route exact path = "/" element ={<Home/>}/>
        <Route path = "/reservations" element ={<Reservations/>}/>
   </Routes>
 </>
  );
}

export default App;
