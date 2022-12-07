import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CodeIcon from "@mui/icons-material/Code";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Chip, Popper } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const [dropdown, setDropdown] = useState("");
  const [bgCol1, setBgCol1] = useState("white");
  const [bgCol2, setBgCol2] = useState("white");
  const [bgCol3, setBgCol3] = useState("white");
  const [bgCol4, setBgCol4] = useState("white");

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  /*  const [ref2project, inView2project] = useInView({
    triggerOnce: true,
  });
  const [ref3project, inView3project] = useInView({
    triggerOnce: true,
  }); finish useEffect hooks etc...
  */

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 2.5,
        },
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        y: -300,
        opacity: 0,
      });
    }
  }, [inView]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [anchorEl4, setAnchorEl4] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    if (bgCol1 === "white") setBgCol1("#64646b");
    else setBgCol1("white");
  };
  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
    if (bgCol2 === "white") setBgCol2("#64646b");
    else setBgCol2("white");
  };
  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
    if (bgCol3 === "white") setBgCol3("#64646b");
    else setBgCol3("white");
  };
  const handleClick4 = (event) => {
    setAnchorEl4(anchorEl4 ? null : event.currentTarget);
    if (bgCol4 === "white") setBgCol4("#64646b");
    else setBgCol4("white");
  };

  const open = Boolean(anchorEl);
  const id = open ? "transition-popper" : undefined;
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "transition-popper" : undefined;
  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? "transition-popper" : undefined;
  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? "transition-popper" : undefined;

  const refNav = useRef();

  const size = useWindowSize();
  useEffect(() => {
    if (size.width > "870") setDropdown("");
  }, [size.width]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refNav?.current?.contains(event.target)) {
        setDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [refNav]);

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
      <header ref={refNav}>
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
            <a
              href="#about"
              className="about"
            >
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
            I`m a <span>software</span> & <span>web developer</span>{" "}
            currently based in Novi Sad, Serbia.
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="projects_section"
      >
        <div className="projects_div">
          <motion.h2
            animate={animation}
            initial={{ y: -300, opacity: 0 }}
          >
            Projects <span>.</span>
          </motion.h2>
          <div
            className="projects"
            ref={ref}
          >
            <div className="left_div">
              <motion.div
                className="single_project"
                animate={animation}
                initial={{ y: -300, opacity: 0 }}
                style={{ border: "1px solid #ff3a5e" }}
              >
                <h3>Crypto Price Checker</h3>
                <video
                  autoPlay
                  muted
                  width="358"
                >
                  <source
                    src={require("./assets/crypto.mp4")}
                    type="video/mp4"
                  />
                </video>
                <p>
                  Web application for checking the latest
                  cryptocurrency statistics. In this application, my
                  focus was on simplicity and design. The data is
                  fetched from an api.
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
                    onClick={(e) => {
                      handleClick(e);
                    }}
                    style={{ backgroundColor: bgCol1 }}
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
              </motion.div>
              <motion.div
                className="single_project"
                animate={animation}
                initial={{ y: -300, opacity: 0 }}
                style={{ border: "1px solid rgb(255, 58, 120)" }}
              >
                <h3>Team Management</h3>
                <video
                  autoPlay
                  muted
                  width="358"
                >
                  <source
                    src={require("./assets/team.mp4")}
                    type="video/mp4"
                  />
                </video>
                <p>
                  This application utilizes a firebase backend. Users
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
                    style={{ backgroundColor: bgCol2 }}
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
              </motion.div>
            </div>
            <div className="right_div">
              <motion.div
                className="single_project"
                animate={animation}
                initial={{ y: -300, opacity: 0 }}
                style={{
                  border: "1px solid rgb(250, 57, 154)",
                }}
              >
                <h3>Shopping site</h3>
                <video
                  autoPlay
                  muted
                  width="358"
                >
                  <source
                    src={require("./assets/ecommerce.mp4")}
                    type="video/mp4"
                  />
                </video>
                <p>
                  Multi-page web application. Products in the shop are
                  fetched from an api. Customers can add items to
                  cart, increase or decrease quantity of items and
                  delete items from the cart. Handling CRUD operations
                  with Redux.
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
                    style={{ backgroundColor: bgCol3 }}
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
              </motion.div>
              <motion.div
                className="single_project"
                animate={animation}
                initial={{ y: -300, opacity: 0 }}
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
                    style={{ backgroundColor: bgCol4 }}
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
              </motion.div>
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
              src={require("./assets/resume.jpg")}
              alt=""
            />

            <a
              href={require("./assets/resume.pdf")}
              download
              target="_blank"
            >
              <button className="download">Download</button>
            </a>
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
                href="https://linkedin.com/in/stefan-drazic"
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
