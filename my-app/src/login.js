import React, { useState } from 'react';

const Login= () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Identifiant:', username);
    console.log('Mot de passe:', password);

    
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Identifiant :</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" style={{ width: 'auto', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
