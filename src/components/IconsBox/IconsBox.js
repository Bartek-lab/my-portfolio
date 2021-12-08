import classes from "./IconsBox.module.css";
import gitHubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin-logo.png";
const IconsBox = () => {
  return (
    <div className={classes.iconBox}>
      <a href="https://github.com/Bartek-lab" alt="github-link">
        <img src={gitHubLogo} alt="github_profile"></img>
      </a>
      <a
        href="https://www.linkedin.com/in/bartek-benedyczak-a0a551216/"
        alt="linkedin-link"
      >
        <img src={linkedinLogo} alt="linkedin_profile"></img>
      </a>
    </div>
  );
};

export default IconsBox;
