import React from "react";
import classes from "./AboutMe.module.css";
import imageDesktop from "../../images/aboutMe_page_desktop.png";
import imageMobile from "../../images/aboutMe_page_mobile.png";
import IconsBox from "../IconsBox/IconsBox";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div className={classes.aboutMeSection} id="AboutMe">
      <div className={classes.backgroundBox} ref={ref}>
        <div className={classes.emptyBox}></div>
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
            of 2020, because I decided to change proffesion and dive into a web
            development. Since that time I spend many hours to improve my
            skills,and it brings me a lot of satisfaction.
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
