import "./Contact.css";

function Contact() {
  return (
    <div className="Contact-container">
      <h2 className="Contact-title">Contact</h2>
      <h3 className="Contact-subtitle">
        If you are interested in hiring me, you can contact me here:
      </h3>
      <div className="Contact-card">
        <div className="Contact-link">
          <a
            href="mailto: alexissalomon31@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-envelope"></i>
          </a>
          <p>alexissalomon31@gmail.com</p>
        </div>
        <div className="Contact-link">
          <a
            href="https://www.linkedin.com/in/alexis-salom%C3%B3n-971548239/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <p>Alexis Salomon</p>
        </div>
        <div className="Contact-link">
          <a href="https://github.com/alexissalo" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <p>alexissalo</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
