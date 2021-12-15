import { Link } from "react-scroll";
import LandingImageMobile from "../../images/landing_page_mobile.png";
import LandingImageDesktop from "../../images/landing_page_desktop.png";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
  return (
    <div className={classes.landingPage} id="landingPage">
      <div className={classes.mainBox}>
        <div className={classes.landingImageBox}>
          <img
            src={LandingImageMobile}
            alt="landingImage"
            className={classes.landingImageMobile}
          />
          <img
            src={LandingImageDesktop}
            alt="landingImage"
            className={classes.landingImageDesktop}
          />
        </div>
        <div className={classes.infoBox}>
          <h1 className={classes.title}>Welcome</h1>
          <article className={classes.mainText}>
            I am Front-end developer.
            <br /> Let's talk what we can do together...
          </article>
          <div className={classes.buttonBox}>
            <Link to="AboutMe" smooth={true} duration={300}>
              <button className={classes.mainButton}> About me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
