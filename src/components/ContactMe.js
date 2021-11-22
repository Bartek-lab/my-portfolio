import classes from "./ContactMe.module.css";
import GitHubIcon from "../images/github-logo.png";

const ContactMe = () => {
  return (
    <div className={classes.contactMeSection}>
      <form className={classes.contactForm}>
        <h3>Contact Me</h3>
        <input type="text" className={classes.personalInfoInput}></input>
        <input type="text" className={classes.personalInfoInput}></input>
        <input type="text" className={classes.personalInfoInput}></input>
        <input type="text" className={classes.mainTextInput}></input>
        <button>Submit</button>
      </form>

      <div className={classes.footer}>
        <img src={GitHubIcon} alt="github_profile" />
        <p>E-mail : bartosz.benedyczak@gmail.com</p>
        <p>Bartek Benedyczak</p>
        <p>Poznań, Poland</p>
      </div>
    </div>
  );
};

export default ContactMe;
