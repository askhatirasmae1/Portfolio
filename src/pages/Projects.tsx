export default function Projects() {
  return (
    <section>
      <span className="badge">💼 Mon projet</span>

      <h1 className="page-title">Projet</h1>

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
    </section>
  );
}