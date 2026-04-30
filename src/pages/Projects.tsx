export default function Projects() {
  return (
    <section>
      <span className="badge">💼 Mes projets</span>

      <h1 className="page-title">Projets</h1>

      <div className="projects-list">
        <div className="project-card">
          <h2>Gestion de Restaurant</h2>

          <p>
            Application web complète de gestion de restaurant développée avec HTML,
            CSS, JavaScript et PHP. Ce projet permet de gérer les menus, les commandes,
            les réservations et les utilisateurs avec une interface moderne et intuitive.
          </p>

          <div className="tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/askhatirasmae1/gestion-restaurant-project"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            🔗 Voir sur GitHub
          </a>
        </div>

        <div className="project-card">
          <h2>Number Book</h2>

          <p>
            Application de gestion de contacts développée avec React, Node.js
            et une version mobile réalisée avec Android Studio. Le projet permet
            d’organiser les numéros, gérer les contacts et proposer une utilisation
            simple entre web et mobile.
          </p>

          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Android Studio</span>
            <span>API</span>
          </div>

          <a
            href="https://github.com/askhatirasmae1/number-book/tree/main"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            🔗 Voir sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}