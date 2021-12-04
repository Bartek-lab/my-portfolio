import classes from "./Projects.module.css";
import Card from "../Card";
const Projects = () => {
  return (
    <Card>
      <div className={classes.projectSection} id="myProjects">
        <div className={classes.mainBox}>
          <div className={classes.infoBox}>
            <h2>My projects</h2>
            <span className={classes.spanLine} />
            <article>
              <p> I’m always thinking how i can put UX on high level...</p>
              <br />
              <p>Do you have questions? Ask me</p>
            </article>
          </div>
          <div className={classes.sideProjects}>
            <div className={classes.projectBox}>
              <div className={classes.offerImgUnique}>
                <a href="./Projects">Unique-travel</a>
              </div>
              <div>
                <p classNmae={classes.projectDescription}>
                  In this project i used, HTML, CSS and Javascript.{" "}
                </p>
                <p classNmae={classes.projectDescription}>
                  Fully responsive with a few DOM manipulating featuers.
                </p>
              </div>
            </div>
            <div className={classes.projectBox}>
              <div className={classes.offerImgVeggie}>
                <a href="./Projects">Veggie</a>
              </div>
              <div>
                <p> Demo food ordering ReactJs App.</p>{" "}
                <p>I used plenty of React Hooks to build this app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
