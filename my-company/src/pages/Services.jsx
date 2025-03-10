// File: src/pages/Services.jsx
function Services() {
    const containerStyles = {
      padding: '40px 0'
    };
  
    const headingStyles = {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '30px'
    };
  
    const serviceCardStyles = {
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer'
    };
  
    const serviceHeadingStyles = {
      fontSize: '1.5rem',
      color: '#444',
      marginBottom: '10px'
    };
  
    const serviceParagraphStyles = {
      color: '#666',
      lineHeight: '1.5'
    };
  
    return (
      <div style={containerStyles}>
        <h1 style={headingStyles}>Our Services</h1>
        
        <div style={serviceCardStyles}>
          <h2 style={serviceHeadingStyles}>Technology Consulting</h2>
          <p style={serviceParagraphStyles}>
            Our technology consulting services help businesses leverage the latest technologies
            to improve efficiency, reduce costs, and drive innovation.
          </p>
        </div>
        
        <div style={serviceCardStyles}>
          <h2 style={serviceHeadingStyles}>Market Analysis</h2>
          <p style={serviceParagraphStyles}>
            We provide comprehensive market analysis to help you understand your target audience,
            competitors, and market trends, enabling you to make informed business decisions.
          </p>
        </div>
        
        <div style={serviceCardStyles}>
          <h2 style={serviceHeadingStyles}>Product Development</h2>
          <p style={serviceParagraphStyles}>
            Our product development team works closely with you to transform your ideas into
            successful products that meet customer needs and business objectives.
          </p>
        </div>
      </div>
    );
  }
  
  export default Services;
  