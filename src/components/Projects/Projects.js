import classes from "./Projects.module.css";

const Projects = () => {
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
              <div className={classes.offerImgUnique}>
                <a href="./Projects">Unique-travel</a>
              </div>
              <div>
                <p className={classes.projectDescription}>
                  Travel company website.
                  <br />
                  Fully responsive with a few DOM manipulating featuers.
                </p>
              </div>
            </div>
            <div className={classes.projectBox}>
              <div className={classes.offerImgVeggie}>
                <a href="./Projects">Veggie</a>
              </div>
              <div>
                <p>
                  {" "}
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
