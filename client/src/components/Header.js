import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/" className='logo'>
        My Blog
      </Link>
      <nav>
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' to='/register'>Register</Link>
      </nav>
    </header>
  );
}
