/ File: src/pages/Home.jsx
function Home() {
  const containerStyles = {
    padding: '40px 0',
    textAlign: 'center'
  };

  const headingStyles = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
  };

  const paragraphStyles = {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const ctaButtonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Welcome to Our Company</h1>
      <p style={paragraphStyles}>
        We are dedicated to delivering excellence in all our services. Our team of experts works
        tirelessly to ensure that your needs are met with the highest quality solutions.
      </p>
      <button style={ctaButtonStyles}>Learn More</button>
    </div>
  );
}

export default Home;