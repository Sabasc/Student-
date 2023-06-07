
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Sign_img from './components/Sign_img';
import Details from './components/Details';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/details'element={<Details/>}/>
    </Routes>
    {/* <Home/> */}
    </> 
  );
}

export default App;
