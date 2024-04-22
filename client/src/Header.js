import{Link} from 'react-router-dom';

export default function Header() {
    return(
    <header>
        <Link to='/' className='logo'>Charities</Link>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/Signup'>Sign Up</Link>
          <Link to='/Aboutus'>About Us</Link>
        </nav>
      </header>
    );
}