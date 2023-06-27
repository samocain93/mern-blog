import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    });
  });
  return (
    <header>
      <Link to='/' className='logo'>
        My Blog
      </Link>
      <nav>
        <Link className='link' to='/login'>
          Login
        </Link>
        <Link className='link' to='/register'>
          Register
        </Link>
      </nav>
    </header>
  );
}
