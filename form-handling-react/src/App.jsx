// src/App.jsx
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div className="App">
      <h1>Form Handling in React</h1>
      
      <div className="forms-container">
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  );
}

export default App;