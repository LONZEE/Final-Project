import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUsername (userInfo.username);
      });
    });

  }, []);
  return (
    <header>
      <Link to='/' className='logo'>Charities</Link>
      <nav>
        {username && (
          <>
          <Link to = '/create'>Create</Link>
         
          </>
        )}
        {!username && (
          <>
          <Link to = '/login'>Login</Link>
          <Link to = '/signup'>Sign Up</Link>
          <Link to='/Aboutus'>About Us</Link>
          </>
          )}
        
      </nav>
    </header>
  );
}