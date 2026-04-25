export default function Formations() {
  return (
    <section>
      <h1 className="page-title">Formations</h1>

      <div className="formation-card">
        <div className="formation-icon">🎓</div>

        <div className="formation-content">
          <h2>
            Licence en Informatique
            <span className="status-badge">En cours</span>
          </h2>

          <h3>École Normale Supérieure de Marrakech — ENS Marrakech</h3>

          <p>
            Formation axée sur la programmation, le développement web, les bases
            de données et la conception des systèmes informatiques.
          </p>

          <p>
            Ce parcours m’a permis de développer mes compétences techniques et
            de réaliser des projets concrets comme une application web de gestion
            de restaurant.
          </p>
        </div>

        <div className="formation-meta">
          <p>📍 Marrakech</p>
          <p>📅 2022 - 2026</p>
        </div>
      </div>
    </section>
  );
}