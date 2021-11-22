import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.navBox}>
      <nav>
        <a href="./AboutMe">About me</a>
        <a href="./SkillsAndTools">SkillsAndTools</a>
        <a href="./Projects">Projects</a>
        <a href="./ContactMe">Contact Me</a>
      </nav>
    </div>
  );
};

export default Nav;
