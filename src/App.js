import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <div class="mobile-menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-list">
          <li>
            <a href="#about">
              About <span>me</span>
            </a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </header>
      <section className="about_me_section">
        <div className="name">
          <p className="name_name">
            Hey there, it`s <span>Stefan Dražić</span>
          </p>
          <p className="name_p">
            I`m a <span>software developer</span> currently based in
            Novi Sad, Serbia
          </p>
        </div>
      </section>
      <section className="projects_section">
        <div className="projects_div">
          <h2>
            Projects <span>.</span>
          </h2>
          <div className="projects">
            <div
              className="single_project"
              style={{ border: "1px solid #ff3a5e" }}
            >
              <h3>Crypto Price Checker</h3>
              <img
                src={require("./assets/crypto.png")}
                alt=""
              />
              <p>Description</p>
              <div className="buttons">
                <button className="live">Live</button>
                <button className="code">Code</button>
              </div>
            </div>
            <div
              className="single_project"
              style={{ border: "1px solid rgb(250, 57, 130)" }}
            >
              <h3>Team Management</h3>
              <img
                src={require("./assets/crypto.png")}
                alt=""
              />
              <p>Description</p>
              <div className="buttons">
                <button className="live">Live</button>
                <button className="code">Code</button>
              </div>
            </div>
            <div
              className="single_project"
              style={{
                border: "1px solid rgb(250, 57, 160)",
              }}
            >
              <h3>Shopping site</h3>
              <img
                src={require("./assets/crypto.png")}
                alt=""
              />
              <p>Description</p>
              <div className="buttons">
                <button className="live">Live</button>
                <button className="code">Code</button>
              </div>
            </div>
            <div
              className="single_project"
              style={{
                border: "1px solid rgb(250, 57, 190)",
              }}
            >
              <h3>Portfolio Website</h3>
              <img
                src={require("./assets/crypto.png")}
                alt=""
              />
              <p>Description</p>
              <div className="buttons">
                <button className="live">Live</button>
                <button className="code">Code</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume_contact_section">
        <div>
          <div className="resume">
            <h1>Resume</h1>
            <img
              src=""
              alt=""
            />
            <button className="download">Download</button>
          </div>
        </div>
        <div className="contact">
          <h1>Contact me</h1>
          <h2>Email</h2>
          <h2>Github</h2>
          <h2>LinkedIn</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
