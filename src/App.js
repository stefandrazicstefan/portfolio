import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
  return (
    <div className="app">
      <header>
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-list">
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
            I`m a <span>software developer</span> currently studying
            Data Engineering at the Faculty of Technical Sciences in
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
                src={require("./assets/crypto.gif")}
                alt=""
              />
              <p>
                Web application for checking latest cryptocurrency
                statistics. In this application, my focus was on
                simplicity and design. The data is fetched from an
                api.
              </p>
              <div className="buttons">
                <button className="live">
                  <VisibilityIcon />
                  <span>Live</span>
                </button>
                <button className="code">
                  <CodeIcon />
                  <span>Code</span>
                </button>
                <button className="technologies">
                  <SettingsIcon />
                  <span>Technologies Used</span>
                </button>
              </div>
            </div>
            <div
              className="single_project"
              style={{ border: "1px solid rgb(255, 58, 120)" }}
            >
              <h3>Team Management</h3>
              <img
                src={require("./assets/team.gif")}
                alt=""
              />
              <p>
                This application utilizes a firebase backend. You can
                create, read, edit and delete members of the team.{" "}
              </p>
              <div className="buttons">
                <button className="live">
                  <VisibilityIcon />
                  <span>Live</span>
                </button>
                <button className="code">
                  <CodeIcon />
                  <span>Code</span>
                </button>
                <button className="technologies">
                  <SettingsIcon />
                  <span>Technologies Used</span>
                </button>
              </div>
            </div>
            <div
              className="single_project"
              style={{
                border: "1px solid rgb(250, 57, 154)",
              }}
            >
              <h3>Shopping site</h3>
              <img
                src={require("./assets/crypto.png")}
                alt=""
              />
              <p>
                Multi-page web application. Products in the shop are
                fetched from an api. Customer can add items to cart,
                increase or decrease quantity of items, delete items
                from cart. Handling CRUD operations with Redux.
              </p>
              <div className="buttons">
                <button className="live">
                  <VisibilityIcon />
                  <span>Live</span>
                </button>
                <button className="code">
                  <CodeIcon />
                  <span>Code</span>
                </button>
                <button className="technologies">
                  <SettingsIcon />
                  <span>Technologies Used</span>
                </button>
              </div>
            </div>
            <div
              className="single_project"
              style={{
                border: "1px solid rgb(250, 57, 184)",
              }}
            >
              <h3>Portfolio Website</h3>
              <img
                src={require("./assets/crypto.png")}
                alt=""
              />
              <p>Description</p>
              <div className="buttons">
                <button className="live">
                  <VisibilityIcon />
                  <span>Live</span>
                </button>
                <button className="code">
                  <CodeIcon />
                  <span>Code</span>
                </button>
                <button className="technologies">
                  <SettingsIcon />
                  <span>Technologies Used</span>
                </button>
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
          <div className="contact_div">
            <h2>
              <EmailIcon />
              Email
            </h2>
            <h2>
              <a
                href="https://github.com/stefandrazicstefan/"
                target="_blank"
                style={{ color: "white" }}
              >
                <GitHubIcon />
              </a>
              Github
            </h2>
            <h2>
              <a
                href="https://www.linkedin.com/in/%D1%81%D1%82%D0%B5%D1%84%D0%B0%D0%BD-%D0%B4%D1%80%D0%B0%D0%B6%D0%B8%D1%9B-578533256/"
                target="_blank"
                style={{ color: "#0A66C2" }} // white or blue ?
              >
                <LinkedInIcon />
              </a>
              LinkedIn
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
