import React from 'react';

function Content() {
  return (
    <main style={styles.content}>
      <section style={styles.section}>
        <h2 style={styles.heading}>The Story</h2>
        <p style={styles.paragraph}>
          The Epic of Gilgamesh is an ancient Mesopotamian poem, widely regarded
          as the earliest great work of literature. It tells the story of
          Gilgamesh, the powerful and arrogant king of Uruk, who is two-thirds
          god and one-third human. His tyrannical rule over his people leads the
          gods to create Enkidu, a wild man of the wilderness, to challenge and
          humble him. After an intense battle, the two become the closest of
          friends and embark on daring adventures together, including slaying the
          fearsome guardian Humbaba in the Cedar Forest and defeating the Bull of
          Heaven sent by the goddess Ishtar.
        </p>
        <p style={styles.paragraph}>
          Tragedy strikes when the gods decree that Enkidu must die as punishment
          for their exploits. Enkidu falls ill and passes away, leaving Gilgamesh
          devastated and consumed by grief. For the first time, Gilgamesh
          confronts the reality of his own mortality. Terrified of death, he sets
          out on an epic journey to find Utnapishtim, the only human ever granted
          immortality by the gods. His journey takes him across treacherous
          mountains, through the darkness beneath the earth, and over the Waters
          of Death.
        </p>
        <p style={styles.paragraph}>
          When Gilgamesh finally reaches Utnapishtim, he learns the story of the
          Great Flood and is given a chance to obtain a plant that restores youth.
          However, a serpent steals the plant while Gilgamesh bathes in a pool,
          and he returns to Uruk empty-handed. Yet upon seeing the magnificent
          walls of his city, Gilgamesh realizes that true immortality lies not in
          living forever, but in the lasting legacy one leaves behind through
          great deeds and contributions to civilization.
        </p>
      </section>
    </main>
  );
}

const styles = {
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  section: {
    lineHeight: '1.8',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#2c1810',
    borderBottom: '2px solid #c9a96e',
    paddingBottom: '10px',
    fontFamily: 'Georgia, serif',
  },
  paragraph: {
    fontSize: '1.05rem',
    color: '#3a3a3a',
    marginBottom: '20px',
    textAlign: 'justify',
  },
};

export default Content;
