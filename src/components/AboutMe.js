import classes from "./AboutMe.module.css";
import Image from "../images/photo_holder.png";
import LinkedinIcon from "../images/linkedin.png";
import GitHubIcon from "../images/github-logo.png";

const AboutMe = () => {
  return (
    <div className={classes.aboutMe_section}>
      <div className={classes.backgroundBox}>
        <div className={classes.emptyBox}></div>
        <div className={classes.titleBox}>
          <h2>About me</h2>
          <span className={classes.spanLine}></span>
        </div>
      </div>
      <div className={classes.mainBox}>
        <div className={classes.imageBox}>
          <img
            src={Image}
            alt="AboutMe_photography"
            className={classes.aboutMe_image}
          />
        </div>
        <div className={classes.aboutMe_info}>
          <article className={classes.aboutMe_text}>
            My name is Bartek, based in Poznań, Poland. I started learning
            front-end develompent one year ago. I’m glad that I can follow that
            path...
          </article>
          <div className={classes.iconsBox}>
            <img src={GitHubIcon} alt="github_profile"></img>
            <img src={LinkedinIcon} alt="linkedin_profile"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
