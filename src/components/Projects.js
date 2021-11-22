import classes from "./Projects.module.css";
import Card from "./Card";
const Projects = () => {
  return (
    <Card>
      <div className={classes.projectSection}>
        <div className={classes.mainBox}>
          <div className={classes.infoBox}>
            <h2>My projects</h2>
            <span className={classes.spanLine} />
            <article>
              <p> I’m always thinking how i can put UX on high level...</p>
              <p>Do you have questions? Ask me</p>
            </article>
          </div>
          <div className={classes.sideProjects}>
            <div>
              <div className={classes.offerImgUnique}>
                <a href="./Projects">Unique-travel</a>
              </div>
              <div>
                <article>
                  <p>In this project i used, HTML, CSS and Javascript. </p>
                  <p>Fully responsive with a few DOM manipulating featuers.</p>
                </article>
              </div>
            </div>
            <div>
              <div className={classes.offerImgVeggie}>
                <a href="./Projects">Veggie</a>
              </div>
              <div>
                <article>
                  <p> Demo food ordering ReactJs App.</p>{" "}
                  <p>I used plenty of React Hooks to build this app.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
