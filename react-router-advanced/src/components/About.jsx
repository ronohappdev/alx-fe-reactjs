// File: src/components/About.jsx
function About() {
    return (
      <div className="about-page">
        <h1>About This Project</h1>
        <p>This project demonstrates advanced routing techniques using React Router version 6.</p>
        <p>Key features implemented:</p>
        <ul>
          <li><strong>Nested Routes:</strong> Using the Outlet component to nest UI and routes</li>
          <li><strong>Protected Routes:</strong> Implementing authentication checks before allowing access to certain routes</li>
          <li><strong>Dynamic Routing:</strong> Using URL parameters to create dynamic content pages</li>
        </ul>
      </div>
    );
  }
  
  export default About;
  