// File: src/pages/About.jsx
function About() {
    const containerStyles = {
      padding: '40px 0'
    };
  
    const headingStyles = {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '20px'
    };
  
    const paragraphStyles = {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '20px'
    };
  
    const sectionStyles = {
      marginTop: '40px'
    };
  
    const subHeadingStyles = {
      fontSize: '1.5rem',
      color: '#444',
      marginBottom: '15px'
    };
  
    return (
      <div style={containerStyles}>
        <h1 style={headingStyles}>About Us</h1>
        <p style={paragraphStyles}>
          Our company has been providing top-notch services since 1990. We specialize in various fields
          including technology, marketing, and consultancy.
        </p>
        
        <div style={sectionStyles}>
          <h2 style={subHeadingStyles}>Our Mission</h2>
          <p style={paragraphStyles}>
            To deliver innovative solutions that help our clients achieve their goals and exceed their expectations.
          </p>
        </div>
        
        <div style={sectionStyles}>
          <h2 style={subHeadingStyles}>Our Vision</h2>
          <p style={paragraphStyles}>
            To become the leading provider of comprehensive business solutions, recognized for our excellence,
            integrity, and commitment to customer satisfaction.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;