export default function Home() {
  return (
    <section className="home-page">
      <span className="badge">🚀 Mes compétences</span>

      <h1 className="page-title">Technologies utilisées</h1>

      <p className="subtitle">
        Voici les principales technologies que j’utilise pour développer des applications web et mobiles.
      </p>

      <div className="tech-grid">

        <div className="tech-card tech-blue">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="tech-card tech-green">
          <h3>Backend</h3>
          <ul>
            <li>PHP</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>API REST</li>
          </ul>
        </div>

        <div className="tech-card tech-orange">
          <h3>Outils & Mobile</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Android Studio</li>
            <li>jQuery</li>
          </ul>
        </div>

      </div>
    </section>
  );
}