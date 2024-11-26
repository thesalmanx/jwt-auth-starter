import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password })).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/dashboard');
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔑 Welcome Back!</h1>
      <p style={styles.subtitle}>Please log in to your account</p>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="👤 Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="🔒 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? '⏳ Logging in...' : '🚀 Login'}
        </button>
        {error && <p style={styles.error}>{error.msg || '❌ An error occurred'}</p>}
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  error: {
    color: '#ff4d4f',
    marginTop: '10px',
  },
};
