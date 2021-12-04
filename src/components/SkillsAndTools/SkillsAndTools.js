import classes from "./SkillsAndTools.module.css";
import ItemsBox from "../ItemsBox/ItemsBox";
import skillsIcon from "../../images/skills-icon.png";
import toolsIcon from "../../images/tools-icon.png";
import Card from "../Card";
const SkillsAndTools = (props) => {
  const skills = [
    {
      name: "skills",
      img: skillsIcon,
      items: ["HTML", "CSS", "Sass", "Javascript", "ReactJs"],
      id: 1,
    },
  ];

  const tools = [
    {
      name: "tools",
      img: toolsIcon,
      items: ["Visual Studio Code", "Prettier", "Github", "Terminal", "Figma "],
      id: 2,
    },
  ];

  return (
    <Card>
      <div className={classes.skillsSection} id="skillsAndTools">
        <div className={classes.mainBox}>
          <div className={classes.skillsText}>
            <h2>What can I do ?</h2>
            <span className={classes.spanLine}></span>
            <article>
              I’m always trying to write clean code, with high performence
              effects. If you have any tasks for me, send and e-mail and expect
              quickly answer.
            </article>
          </div>
          <div className={classes.infoTools}>
            <ItemsBox skills={skills} />
            <ItemsBox skills={tools} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillsAndTools;
