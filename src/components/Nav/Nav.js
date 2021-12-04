import classes from "./Nav.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import LinkedinIcon from "../../images/linkedin.png";
import GitHubIcon from "../../images/github-logo.png";
import {
  FaHome,
  FaIdCard,
  FaTools,
  FaKeyboard,
  FaComment,
} from "react-icons/fa";

const Nav = () => {
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
        }`}
        onClick={() => {
          setOpen(!isOpen);
        }}
        onMouseOver={() => {
          setOpen(true);
        }}
        onMouseOut={() => {
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
              <div className={classes.menuIcon}>
                <FaHome />
              </div>
              <div className={classes.linkName}>
                <p>Home</p>
              </div>
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
              <FaIdCard />
              <div className={classes.linkName}> About me</div>
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
              <FaTools />
              <div className={classes.linkName}> SkillsAndTools</div>
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
              <FaKeyboard />
              <div className={classes.linkName}> Projects</div>
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
              {" "}
              <FaComment />
              <div className={classes.linkName}> Contact Me</div>
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
