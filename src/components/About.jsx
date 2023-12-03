import "./About.css";

function About() {
  return (
    <div id="about" className="About-container">
      <div className="About-title">
        <h2>About Me</h2>
      </div>
      <div className="About-container-2">
        <div className="About-text">
          <div className="About-image"></div>
          <h3>An enthusiast Web Developer &#128187;</h3>
          <p>
            I am 20 years old, I am from Argentina. In the last 2 years, I have
            worked on several projects using mainly the <span> MERN stack</span> using mainly
            <span> React and Express</span>. With experience in <span> SQL and non-SQL databases</span>.
            What I enjoy most about my job is paying attention to <span> details</span> and I
            like to focus on <span> design and user experience</span>, ensuring the proper
            <span> functioning and optimization</span> of my projects. I am always up to date
            with the latest trends in <span> technology and design</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
