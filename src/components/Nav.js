import classes from "./Nav.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import LinkedinIcon from "../images/linkedin.png";
import GitHubIcon from "../images/github-logo.png";

const Nav = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes.navBox}>
        <div className={classes.hamburgerBox}>
          <Hamburger
            size={40}
            color={`${isOpen ? "#FEC14F" : "#58595B"}`}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <nav
        className={`${
          isOpen ? [classes.menu, classes.active].join(" ") : classes.menu
        } ${!props.isVisible ? classes.menuFixed : ""}`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <ul>
          <li>
            <Link
              to="landingPage"
              smooth={true}
              duration={300}
              onClick={() => {
                setOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="AboutMe"
              smooth={true}
              duration={300}
              onClick={() => {
                setOpen(false);
              }}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="skillsAndTools"
              smooth={true}
              duration={400}
              onClick={() => {
                setOpen(false);
              }}
            >
              SkillsAndTools
            </Link>
          </li>
          <li>
            <Link
              to="myProjects"
              smooth={true}
              duration={500}
              onClick={() => {
                setOpen(false);
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contactMe"
              smooth={true}
              duration={600}
              onClick={() => {
                setOpen(false);
              }}
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <div className={classes.iconBox}>
          <img src={GitHubIcon} alt="github_profile"></img>
          <img src={LinkedinIcon} alt="linkedin_profile"></img>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
