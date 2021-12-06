import LandingImageMobile from "../../images/landing_page_mobile.png";
import LandingImageDesktop from "../../images/landing_page_desktop.png";
import classes from "./LandingPage.module.css";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <div className={classes.landingPage} id="landingPage">
      <div className={classes.mainBox}>
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
        <div className={classes.infoBox}>
          <h1 className={classes.title}>Welcome</h1>
          <article className={classes.mainText}>
            I am Front-end developer.
            <br /> Let's talk what we can do together...
          </article>
          <div className={classes.buttonBox}>
            <button className={classes.mainButton}>
              {" "}
              <Link to="AboutMe" smooth={true} duration={300}>
                About me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
