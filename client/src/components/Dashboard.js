import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>👋 Welcome Back!</h1>
        <h3 style={styles.subtitle}>This is your Dashboard 🏠</h3>
        <p style={styles.text}>
          Access your resources, insights, and tools here. Start exploring and make the most of your time!
        </p>
        <button style={styles.button}>Explore Now 🚀</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #6f42c1, #b36ff2)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    background: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    padding: '30px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#555',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '30px',
  },
  button: {
    padding: '12px 20px',
    borderRadius: '30px',
    backgroundColor: '#6f42c1',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default Dashboard;
