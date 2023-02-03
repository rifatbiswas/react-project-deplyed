
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componans/About';
import Home from './componans/Home';
import Product from './componans/Product';
import LoadCountries from './componans/LoadCountries';
import Notfound from './componans/Notfound';
import Header from './componans/Header';
import Fotter from './componans/Fotter';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/countries' element={<LoadCountries></LoadCountries>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
      
      
    
    </div>
  );
}

export default App;
