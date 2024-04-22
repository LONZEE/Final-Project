// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Layout from './Layout';
import Hero from './Hero';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Signup from './pages/Signup';
import Aboutus from './pages/Aboutus';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path ='/Signup' element={<Signup />} />
        <Route path ='/Aboutus' element={<Aboutus />} />
        </Route>
    </Routes>
  );
}

export default App;
