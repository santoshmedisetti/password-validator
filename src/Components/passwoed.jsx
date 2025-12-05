import { useState } from 'react'
import validator from 'validator'
import './App.css'

function App() {
  const [error, setError] = useState('');

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setError("Strong Password ✔️");
    } else {
      setError("Not a Strong Password ❌");
    }
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <h2>Checking Password Strength</h2>

      <span>Enter Password:</span>
      <input 
        type="text"
        onChange={(e) => validate(e.target.value)}
        style={{ marginLeft: '10px' }}
      />

      <br/><br/>

      {error && (
        <span style={{ fontWeight: 'bold', color: 'red' }}>{error}</span>
      )}
    </div>
  );
}

export default App;
