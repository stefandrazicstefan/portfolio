import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Chip, Fade, Popper } from "@mui/material";

function App() {
  const [dropdown, setDropdown] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [anchorEl4, setAnchorEl4] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
  };
  const handleClick4 = (event) => {
    setAnchorEl4(anchorEl4 ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transition-popper" : undefined;
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "transition-popper" : undefined;
  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? "transition-popper" : undefined;
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "transition-popper" : undefined;

  const ref = useRef();

  const size = useWindowSize();
  useEffect(() => {
    if (size.width > "870") setDropdown("");
  }, [size.width]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  return (
    <div className="app">
      <header ref={ref}>
        <div className="nav">
          <p
            onClick={(e) => {
              dropdown === "" ? setDropdown("flex") : setDropdown("");
            }}
          >
            <MenuIcon style={{ fontSize: "50px" }} />
          </p>
        </div>
        <div
          className="mobile-menu"
          style={{ display: dropdown }}
        >
          <div className="line1">
            <a href="#about">
              About <span>me</span>
            </a>
          </div>
          <div className="line2">
            <a href="#projects">Projects</a>
          </div>
          <div className="line3">
            <a href="#resume">Resume</a>
          </div>
          <div className="line4">
            {" "}
            <a href="#contact">Contact me</a>
          </div>
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
      <section
        id="about"
        className="about_me_section"
      >
        <div className="name">
          <p className="name_name">
            Hey there, it`s <span>Stefan Dražić</span>
          </p>
          <p className="name_p">
            I`m a <span>software developer</span> currently studying
            Data Engineering at the Faculty of Technical Sciences in
            Novi Sad, Serbia.
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="projects_section"
      >
        <div className="projects_div">
          <h2>
            Projects <span>.</span>
          </h2>
          <div className="projects">
            <div className="left_div">
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
                    <a
                      target="_blank"
                      href="https://stefandrazicstefan.github.io/Crypto_Price_Checker/"
                    >
                      <VisibilityIcon />
                      <span>Live</span>
                    </a>
                  </button>
                  <button className="code">
                    <a
                      target="_blank"
                      href="https://github.com/stefandrazicstefan/Crypto_Price_Checker"
                    >
                      <CodeIcon />
                      <span>Code</span>
                    </a>
                  </button>
                  <button
                    className="technologies"
                    onClick={handleClick}
                  >
                    <SettingsIcon />
                    <span>Technologies Used</span>
                  </button>
                  <div>
                    <Popper
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                    >
                      <Box
                        sx={{
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                          borderRadius: 2,
                        }}
                      >
                        <Chip
                          label="React"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="JavaScript"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="HTML"
                          variant="outlined"
                        />
                        <br />{" "}
                        <Chip
                          label="CSS"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Api"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="MUI"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Responsive"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                          }}
                        />
                      </Box>
                    </Popper>
                  </div>
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
                  This application utilizes a firebase backend. You
                  can create, read, edit and delete members of the
                  team.{" "}
                </p>
                <div className="buttons">
                  <button className="live">
                    <a
                      target="_blank"
                      href="https://stefandrazicstefan.github.io/TeamManagement/"
                    >
                      <VisibilityIcon />
                      <span>Live</span>
                    </a>
                  </button>
                  <button className="code">
                    <a
                      target="_blank"
                      href="https://github.com/stefandrazicstefan/TeamManagement"
                    >
                      <CodeIcon />
                      <span>Code</span>
                    </a>
                  </button>
                  <button
                    className="technologies"
                    onClick={handleClick2}
                  >
                    <SettingsIcon />
                    <span>Technologies Used</span>
                  </button>
                  <div>
                    <Popper
                      id={id2}
                      open={open2}
                      anchorEl={anchorEl2}
                    >
                      <Box
                        sx={{
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                          borderRadius: 2,
                        }}
                      >
                        <Chip
                          label="React"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="JavaScript"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="HTML"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="CSS"
                          variant="outlined"
                        />{" "}
                        <br />{" "}
                        <Chip
                          label="Firebase"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="CRUD"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="MUI"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Responsive"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                          }}
                        />
                      </Box>
                    </Popper>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_div">
              <div
                className="single_project"
                style={{
                  border: "1px solid rgb(250, 57, 154)",
                }}
              >
                <h3>Shopping site</h3>
                <img
                  src={require("./assets/ecommerce.gif")}
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
                    <a
                      target="_blank"
                      href="https://stefandrazicstefan.github.io/Shopping-Site/"
                    >
                      <VisibilityIcon />
                      <span>Live</span>
                    </a>
                  </button>
                  <button className="code">
                    <a
                      target="_blank"
                      href="https://github.com/stefandrazicstefan/Shopping-Site"
                    >
                      <CodeIcon />
                      <span>Code</span>
                    </a>
                  </button>
                  <button
                    className="technologies"
                    onClick={handleClick3}
                  >
                    <SettingsIcon />
                    <span>Technologies Used</span>
                  </button>
                  <div>
                    <Popper
                      id={id3}
                      open={open3}
                      anchorEl={anchorEl3}
                    >
                      <Box
                        sx={{
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                          borderRadius: 2,
                        }}
                      >
                        <Chip
                          label="React"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="JavaScript"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="HTML"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Redux"
                          variant="outlined"
                        />
                        <br />{" "}
                        <Chip
                          label="CSS"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Api"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="MUI"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Responsive"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                          }}
                        />
                      </Box>
                    </Popper>
                  </div>
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
                  src={require("./assets/portfolio.jpg")}
                  alt=""
                />
                <p>
                  For this website my goal was simplicity and modern
                  design. It is made in React and all styling is done
                  with CSS3.
                </p>
                <div className="buttons">
                  <button className="live">
                    <a
                      target="_blank"
                      href="https://stefandrazicstefan.github.io/portfolio/"
                    >
                      <VisibilityIcon />
                      <span>Live</span>
                    </a>
                  </button>
                  <button className="code">
                    <a
                      target="_blank"
                      href="https://github.com/stefandrazicstefan/portfolio"
                    >
                      <CodeIcon />
                      <span>Code</span>
                    </a>
                  </button>
                  <button
                    className="technologies"
                    onClick={handleClick4}
                  >
                    <SettingsIcon />
                    <span>Technologies Used</span>
                  </button>
                  <div>
                    <Popper
                      id={id4}
                      open={open4}
                      anchorEl={anchorEl4}
                    >
                      <Box
                        sx={{
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                          borderRadius: 2,
                        }}
                      >
                        <Chip
                          label="React"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="JavaScript"
                          variant="outlined"
                          sx={{
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="HTML"
                          variant="outlined"
                        />
                        <br />{" "}
                        <Chip
                          label="CSS"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="MUI"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                            marginRight: 1,
                          }}
                        />
                        <Chip
                          label="Responsive"
                          variant="outlined"
                          sx={{
                            marginTop: 1,
                          }}
                        />
                      </Box>
                    </Popper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="resume"
        className="resume_contact_section"
      >
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
        <div
          className="contact"
          id="contact"
        >
          <h1>Contact me</h1>
          <div className="contact_div">
            <h2>stefandrazicstefan@gmail.com</h2>
            <h2 style={{ marginTop: "5px" }}>
              <a
                href="https://github.com/stefandrazicstefan/"
                target="_blank"
                style={{ color: "white" }}
              >
                <GitHubIcon style={{ fontSize: "30px" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/%D1%81%D1%82%D0%B5%D1%84%D0%B0%D0%BD-%D0%B4%D1%80%D0%B0%D0%B6%D0%B8%D1%9B-578533256/"
                target="_blank"
                style={{
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                <LinkedInIcon
                  style={{ fontSize: "33px", marginBottom: "-2px" }}
                />
              </a>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
