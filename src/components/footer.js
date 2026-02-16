import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.heading}>Moral of the Story</h3>
      <p style={styles.moral}>
        The Epic of Gilgamesh teaches us that the pursuit of physical immortality
        is futile. True immortality is achieved through the meaningful impact we
        leave on the world — the relationships we build, the communities we
        strengthen, and the legacy of our actions. Gilgamesh learns to accept
        mortality and finds purpose in being a just and wise king whose
        contributions endure long after he is gone. The story reminds us to
        cherish our human connections, embrace the finite nature of life, and
        focus on what truly matters.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2c1810',
    color: '#f5e6c8',
    padding: '30px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.4rem',
    color: '#c9a96e',
    marginBottom: '15px',
    fontFamily: 'Georgia, serif',
  },
  moral: {
    maxWidth: '700px',
    margin: '0 auto',
    fontSize: '1rem',
    lineHeight: '1.7',
    fontStyle: 'italic',
  },
};

export default Footer;
