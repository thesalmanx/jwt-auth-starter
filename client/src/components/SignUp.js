import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register({ username, password })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/login');
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Join Us!</h1>
      <p style={styles.subtitle}>Create your account below</p>
      <form onSubmit={handleSignUp} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="👤 Choose a Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="🔒 Create a Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={styles.button}>
          ✍️ Sign Up
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Arial", sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#777',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
