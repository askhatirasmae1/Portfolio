import { useState } from "react";

export default function Certifications() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <span className="badge">🏅 Certifications</span>

      <h1 className="page-title">Mes certifications</h1>

      <div className="cert-column">
        <div className="cert-card-pro">
          <img
            src="/cert1.png"
            alt="Certification React"
            className="cert-img"
            onClick={() => setOpen(true)}
          />

          <div className="cert-info">
            <h2>Développement Front-End moderne avec React</h2>
            <p>MLIAEdu</p>
            <span className="cert-click">Cliquer sur l’image pour agrandir</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="cert-modal" onClick={() => setOpen(false)}>
          <img src="/cert1.png" alt="Certification React" />
        </div>
      )}
    </section>
  );
}