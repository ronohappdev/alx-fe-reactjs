// File: src/components/Footer.jsx
function Footer() {
    const footerStyles = {
      marginTop: '40px',
      padding: '20px 0',
      borderTop: '1px solid #eaeaea',
      textAlign: 'center',
      color: '#666'
    };
  
    const linkStyles = {
      color: '#555',
      textDecoration: 'none',
      margin: '0 10px'
    };
  
    return (
      <footer style={footerStyles}>
        <div>
          <a href="#" style={linkStyles}>Terms</a>
          <a href="#" style={linkStyles}>Privacy</a>
          <a href="#" style={linkStyles}>Careers</a>
        </div>
        <p style={{ marginTop: '10px' }}>
          © {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;