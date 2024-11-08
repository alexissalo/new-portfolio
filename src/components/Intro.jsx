import "./Intro.css";

function Intro() {
  return (
    <section id="home" className="intro-section">
      <div className="intro-top">
        <div className="intro-title">
          <h1>Full Stack Developer.</h1>
          <p className="intro-p">
            Hi, I'm <span>Alexis Salomon</span>. <br />A passionate Full Stack
            Developer from Argentina.
          </p>
          <ul className="intro-ul">
            <li>
              <a
                className="intro-links"
                href="https://www.linkedin.com/in/alexis-salom%C3%B3n-971548239/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="intro-links"
                href="https://github.com/alexissalo"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="intro-img"></div>
      </div>
      <div className="intro-skills">
        <div>
          <h3>My Skills</h3>
        </div>
        <div className="skills">
          <div className="skill-a"></div>
          <div className="skill-b"></div>
          <div className="skill-c"></div>
          <div className="skill-d"></div>
          <div className="skill-e"></div>
          <div className="skill-f"></div>
          <div className="skill-g"></div>
          <div className="skill-h"></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;