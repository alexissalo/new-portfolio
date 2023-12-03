import "./Proyects.css";

function Proyects() {
  return (
    <section id="projects" className="Proyects-container">
      <div className="Proyects-title">
        <h2>My Projects</h2>
      </div>
      <div className="Proyects-card-container">
        <div className="proyect-1 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">SNEAKSHOES</h3>
              <p className="proyect-description">
                Ecommerce page created in coderhouse's React front end
                development career.
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-d"></div>
                <div className="skill-g"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <a
              className="img-link"
              href="https://sneakshoes-ecommerce.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-1"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://sneakshoes-ecommerce.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-globe"></i>
              </a>
              <a
                href="https://github.com/alexissalo/proyecto-react-coderhouse"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="proyect-2 proyect-container">
          <div className="right">
            <a
              className="img-link"
              href="https://poke-react-pokedex.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-2"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://poke-react-pokedex.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-globe"></i>
              </a>
              <a
                href="https://github.com/alexissalo/pokedex-react"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">POKEDEX</h3>
              <p className="proyect-description">
                Pokedex simulator using react and the pokemon api
              </p>
            </div>

            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-b"></div>
                <div className="skill-d"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="proyect-3 proyect-container">
          <div className="left">
            <div className="top">
              <h3 className="proyect-title">MANJARES COMIDAS</h3>
              <p className="proyect-description">
                Ecommerce website created during coderhouse's React front end
                development career
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
                <div className="skill-a"></div>
                <div className="skill-b"></div>
                <div className="skill-c"></div>
              </div>
            </div>
          </div>
          <div className="right">
            <a
              className="img-link"
              href="https://manjares-comidas.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-3"></div>
            </a>
            <div className="proyect-links">
              <a
                href="https://manjares-comidas.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-globe"></i>
              </a>
              <a
                href="https://github.com/alexissalo/proyecto-javascript"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;
