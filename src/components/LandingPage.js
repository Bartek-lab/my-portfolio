import LandingImageMobile from "../images/landing_page_mobile.png";
import LandingImageDesktop from "../images/landing_page_desktop.png";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.landingPage} id="landingPage">
      <div className={classes.mainBox}>
        <div className={classes.infoBox}>
          <h1 className={classes.title}>Welcome</h1>
          <article className={classes.mainText}>
            I'm front-end developer. Please let me know how I can help you...
          </article>
          <div className={classes.buttonBox}>
            <button className={classes.mainButton}>About me</button>
          </div>
        </div>
        <div className={classes.landingImage}>
          <img
            src={LandingImageMobile}
            alt="landingImage"
            className={classes.landingImageMobile}
          ></img>
          <img
            src={LandingImageDesktop}
            alt="landingImage"
            className={classes.landingImageDesktop}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
