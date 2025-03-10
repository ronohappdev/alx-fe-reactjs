// File: src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! \n' + JSON.stringify(formData, null, 2));
  };

  const containerStyles = {
    padding: '40px 0'
  };

  const headingStyles = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px'
  };

  const formStyles = {
    maxWidth: '600px'
  };

  const inputStyles = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: '150px',
    resize: 'vertical'
  };

  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Contact Us</h1>
      
      <form style={formStyles} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyles}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyles}
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyles}
          required
        />
        
        <button type="submit" style={buttonStyles}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;