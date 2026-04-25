export default function Home() {
  return (
    <section className="home-page">
      <span className="badge"> Technologies du projet</span>

      <h1 className="page-title">Gestion Restaurant</h1>

      <p className="subtitle">
        Les technologies utilisées pour créer mon application web de gestion de restaurant.
      </p>

      <div className="tech-grid">
        <div className="tech-card tech-blue">

          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Animate.css</li>
          </ul>
        </div>

        <div className="tech-card tech-green">

          <h3>Backend</h3>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Connexion base de données</li>
          </ul>
        </div>

        <div className="tech-card tech-orange">

          <h3>Outils</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
