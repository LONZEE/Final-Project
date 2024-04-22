// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './hero';
import{Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={
         <main>
         <Header />
         <Hero />
         <Hero />
         <Hero />
       </main> 
      } />
      <Route path={'/login'} element={
        <main>
        <Header />
        <div>login page</div>
      </main>
      } />

    </Routes>
   
  );
}

export default App;
