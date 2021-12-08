import { useMediaQuery } from "react-responsive";
import classes from "./Nav.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import IconsBox from "../IconsBox/IconsBox";
import {
  FaHome,
  FaIdCard,
  FaTools,
  FaKeyboard,
  FaComment,
} from "react-icons/fa";

const Nav = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const isTabletScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const handleToggle = () => {
    setOpenMenu(!isOpenMenu);
  };
  return (
    <div className={classes.header}>
      <div className={classes.navBox}>
        <div className={classes.hamburgerBox}>
          <Hamburger
            size={40}
            color={`${isOpenMenu ? "black" : "#58595B"}`}
            toggled={isOpenMenu}
            toggle={setOpenMenu}
          />
        </div>
      </div>
      <nav
        className={`${
          isOpenMenu ? [classes.menu, classes.active].join(" ") : classes.menu
        }`}
        onClick={() => {
          setOpenMenu(!isOpenMenu);
        }}
        onMouseOver={() => {
          handleToggle();
        }}
        onMouseOut={() => {
          setOpenMenu(false);
        }}
      >
        <ul>
          <li>
            <Link
              to="landingPage"
              smooth={true}
              duration={300}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <div className={classes.navItem}>
                <p>
                  <FaHome />
                </p>
                <div className={classes.linkName}> Home</div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="AboutMe"
              smooth={true}
              duration={300}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <div className={classes.navItem}>
                <p>
                  <FaIdCard />
                </p>
                <div className={classes.linkName}> About me</div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="skillsAndTools"
              smooth={true}
              duration={400}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <div className={classes.navItem}>
                <p>
                  <FaTools />
                </p>
                <div className={classes.linkName}> SkillsAndTools</div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="myProjects"
              smooth={true}
              duration={500}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <div className={classes.navItem}>
                <p>
                  <FaKeyboard />
                </p>
                <div className={classes.linkName}> Projects</div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="contactMe"
              smooth={true}
              duration={600}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <div className={classes.navItem}>
                <p>
                  <FaComment />
                </p>
                <div className={classes.linkName}> Contact Me</div>
              </div>
            </Link>
          </li>
        </ul>
        <div className={classes.iconsMobileMenu}>
          {!isTabletScreen && <IconsBox />}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
