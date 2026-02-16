import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#faf3e0',
  },
};

export default App;
