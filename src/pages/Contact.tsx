export default function Contact() {
  return (
    <section className="contact-section">
      <span className="badge">📩 Contact</span>

      <h1 className="page-title">Me contacter</h1>

      
      <div className="contact-layout">
        {/* LEFT */}
        <div className="contact-info-panel">

          <div className="contact-info-card">
            <div className="contact-icon">📧</div>
            <div>
              <span className="contact-label">Email</span>
              <h2>Askhatirasmae@gmail.com</h2>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">💻</div>
            <div>
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/askhatirasmae1"
                target="_blank"
                rel="noreferrer"
              >
                github.com/askhatirasmae1
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <form className="contact-form-card">
          <h2>Envoyer un message</h2>

          <div className="form-group">
            <label>Nom</label>
            <input type="text" placeholder="Ton nom" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="ton@email.com" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Ton message..." />
          </div>

          <button type="button">Envoyer</button>
        </form>
      </div>
    </section>
  );
}