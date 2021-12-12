import React from "react";
import classes from "./AboutMe.module.css";
import imageDesktop from "../../images/aboutMe_image_desktop.png";
import imageMobile from "../../images/aboutMe_image_mobile.png";
import IconsBox from "../IconsBox/IconsBox";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className={classes.aboutMeSection} id="AboutMe">
      <div className={classes.backgroundBox} ref={ref}>
        <div className={classes.titleBox}>
          <h2>About me</h2>
          <span className={classes.spanLine}></span>
        </div>
      </div>
      <div className={classes.mainBox}>
        <div className={classes.aboutMeInfo}>
          <article className={classes.aboutMeText}>
            Hi 🖖
            <br />
            I'm Bartek, my journey with web development has started in last days
            of 2020, when I started doing research and realized that it can be a
            good direction for my self-development. Then I decided to do first
            courses and research other online sources. After this year I've
            learned number of technologies, which allowed me to navigate in
            front-end environment.
          </article>
          <IconsBox />
        </div>
        <div className={classes.imageBox}>
          <img
            src={imageDesktop}
            alt="AboutMe_photography"
            className={classes.aboutMeImageDesktop}
          />
          <img
            src={imageMobile}
            alt="AboutMe_photography"
            className={classes.aboutMeImageMobile}
          />
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
