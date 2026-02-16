import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>The Epic of Gilgamesh</h1>
      <p style={styles.subtitle}>The Oldest Story Ever Told</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c1810',
    color: '#f5e6c8',
    padding: '40px 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
    fontFamily: 'Georgia, serif',
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '1.1rem',
    margin: 0,
    fontStyle: 'italic',
    color: '#c9a96e',
  },
};

export default Header;
