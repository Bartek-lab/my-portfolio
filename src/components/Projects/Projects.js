import { useState } from "react";
import classes from "./Projects.module.css";
import { Link } from "react-scroll";

const Projects = () => {
  const [onHoverVeggie, setOnHoverVeggie] = useState(false);
  const [onHoverUniqueTravel, setOnHoverUniqueTravel] = useState(false);
  return (
    <div className={classes.projectSection} id="myProjects">
      <div className={classes.mainBox}>
        <div className={classes.infoBox}>
          <h2>My projects</h2>
          <span className={classes.spanLine} />
          <article>
            My projects are made from scratch. I focus on making scalable
            products with practical UX interfaces. Every design has been made in
            Figma. If you have any questions
            <Link to="contactMe" smooth={true} duration={100}>
              <p className={classes.navLink}>, ask me.</p>
            </Link>
          </article>
        </div>
        <div className={classes.sideProjects}>
          <div className={classes.projectBox}>
            <a
              href="https://peaceful-wing-9d34ed.netlify.app/"
              className={classes.link}
            >
              <div
                className={`${
                  onHoverUniqueTravel
                    ? [classes.offerImgUnique, classes.activeUniqueTravel].join(
                        " "
                      )
                    : classes.offerImgUnique
                }`}
                onMouseOver={() => setOnHoverUniqueTravel(!onHoverUniqueTravel)}
                onMouseOut={() => {
                  setOnHoverUniqueTravel(false);
                }}
              >
                <p
                  className={`${
                    onHoverVeggie
                      ? [classes.projectName, classes.activeProjectName].join(
                          " "
                        )
                      : classes.projectName
                  }`}
                >
                  Unique-travel
                </p>
              </div>
            </a>
            <div className={classes.projectInfoBox}>
              <p>
                Travel company website.
                <br />
                Fully responsive with a few DOM manipulating featuers.
              </p>
            </div>
          </div>
          <div className={classes.projectBox}>
            <a
              href="https://infallible-saha-152a89.netlify.app/"
              className={classes.link}
            >
              <div
                className={`${
                  onHoverVeggie
                    ? [classes.offerImgVeggie, classes.activeVeggie].join(" ")
                    : classes.offerImgVeggie
                }`}
                onMouseOver={() => setOnHoverVeggie(!onHoverVeggie)}
                onMouseOut={() => {
                  setOnHoverVeggie(false);
                }}
              >
                <p
                  className={`${
                    onHoverVeggie
                      ? [classes.projectName, classes.activeProjectName].join(
                          " "
                        )
                      : classes.projectName
                  }`}
                >
                  Veggie
                </p>
              </div>
            </a>
            <div className={classes.projectInfoBox}>
              <p>
                Demo food ordering ReactJs App.
                <br />I used plenty of React Hooks to build this app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
