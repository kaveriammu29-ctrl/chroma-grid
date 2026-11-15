import { useState } from 'react';

const cards = [
  {
    title: 'Hogwarts',
    category: 'MAGICAL WORLD',
    description: 'A little magic, mystery and wonder.',
    tag: '01',
    color: '#9b70ff',
    icon: '✦',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Books',
    category: 'STORIES & IDEAS',
    description: 'Every page opens another world.',
    tag: '02',
    color: '#ffb454',
    icon: '▤',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Crochet',
    category: 'HANDMADE',
    description: 'Small stitches, beautiful things.',
    tag: '03',
    color: '#ff76a8',
    icon: '❋',
    image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7ade1?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Iceland',
    category: 'TRAVEL DIARY',
    description: 'Chasing quiet skies and wild landscapes.',
    tag: '04',
    color: '#65d9e8',
    icon: '❄',
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'New York',
    category: 'CITY LIGHTS',
    description: 'Big dreams in a city that never sleeps.',
    tag: '05',
    color: '#f2d36b',
    icon: '⌁',
    image: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Science',
    category: 'CURIOSITY LAB',
    description: 'Questions today, discoveries tomorrow.',
    tag: '06',
    color: '#7ee0a0',
    icon: '⚛',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85'
  }
];

function App() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Chroma home">
          <span className="brand-mark">C</span>
          <span>CHROMA<span className="brand-muted"> / GRID</span></span>
        </a>
        <span className="topbar-note"><span className="status-dot" /> INTERACTIVE COLLECTION</span>
      </nav>

      <section className="hero" id="home">
        <p className="eyebrow">A LITTLE COLOUR IN YOUR DAY</p>
        <h1>Explore the <span>Chroma</span><br />Grid.</h1>
        <p className="intro">
          Six little windows into the things that inspire us.
          Move your pointer over a card and let the colours come alive.
        </p>
      </section>

      <section className="gallery" aria-label="Chroma card collection">
        {cards.map((card) => (
          <article
            className={`chroma-card ${activeCard === card.title ? 'is-active' : ''}`}
            key={card.title}
            style={{ '--glow': card.color, '--card-image': `url("${card.image}")` }}
            onMouseEnter={() => setActiveCard(card.title)}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => setActiveCard(card.title)}
            onBlur={() => setActiveCard(null)}
            tabIndex="0"
          >
            <div className="card-image" role="img" aria-label={`${card.title} themed photograph`} />
            <div className="card-shade" />
            <div className="card-topline">
              <span className="card-number">{card.tag} / 06</span>
              <span className="card-icon" aria-hidden="true">{card.icon}</span>
            </div>
            <div className="card-content">
              <p className="card-category">{card.category}</p>
              <h2>{card.title}</h2>
              <p className="card-description">{card.description}</p>
            </div>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>MADE WITH CURIOSITY <span className="footer-heart">✦</span></span>
        <span>CHROMA GRID CARDS · REACT PROJECT</span>
      </footer>
    </main>
  );
}

export default App;
