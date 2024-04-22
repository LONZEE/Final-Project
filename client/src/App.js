// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Layout from './Layout';
import Hero from './Hero';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path={'/login'} element={<div>login page</div>} />
        </Route>
    </Routes>
  );
}

export default App;
