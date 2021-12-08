import { useState } from "react";
import classes from "./Projects.module.css";

const Projects = () => {
  const [onHoverVeggie, setOnHoverVeggie] = useState(false);
  const [onHoverUniqueTravel, setOnHoverUniqueTravel] = useState(false);
  return (
    <div>
      <div className={classes.projectSection} id="myProjects">
        <div className={classes.mainBox}>
          <div className={classes.infoBox}>
            <h2>My projects</h2>
            <span className={classes.spanLine} />
            <article>
              My projects are made from scratch.
              <br />
              User experience is important for me, as well the ergonomics of
              using app.
              <br />
              Every design has been made in Figma.
              <br />
              If you have any questions, ask me.
            </article>
          </div>
          <div className={classes.sideProjects}>
            <div className={classes.projectBox}>
              <a href="https://peaceful-wing-9d34ed.netlify.app/">
                <div
                  className={`${
                    onHoverUniqueTravel
                      ? [
                          classes.offerImgUnique,
                          classes.activeUniqueTravel,
                        ].join(" ")
                      : classes.offerImgUnique
                  }`}
                  onMouseOver={() =>
                    setOnHoverUniqueTravel(!onHoverUniqueTravel)
                  }
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
              <a href="https://infallible-saha-152a89.netlify.app/">
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
    </div>
  );
};

export default Projects;
