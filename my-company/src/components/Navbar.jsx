import { Link } from 'react-router-dom';

function Navbar() {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: '1px solid #eaeaea'
  };

  const logoStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none'
  };

  const navLinksStyles = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none'
  };

  const linkStyles = {
    textDecoration: 'none',
    color: '#555',
    fontWeight: '500',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  };

  return (
    <nav style={navStyles}>
      <Link to="/" style={logoStyles}>My Company</Link>
      <ul style={navLinksStyles}>
        <li><Link to="/" style={linkStyles}>Home</Link></li>
        <li><Link to="/about" style={linkStyles}>About</Link></li>
        <li><Link to="/services" style={linkStyles}>Services</Link></li>
        <li><Link to="/contact" style={linkStyles}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;