import classes from "./SkillsAndTools.module.css";
import ItemsBox from "../ItemsBox/ItemsBox";
import skillsIcon from "../../images/skills-icon.png";
import toolsIcon from "../../images/tools-icon.png";

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
    <div className={classes.skillsSection} id="skillsAndTools">
      <div className={classes.mainBox}>
        <div className={classes.skillsText}>
          <h2>What can I do?</h2>
          <span className={classes.spanLine}></span>
          <article>
            I’m always trying to write clean code, with high performence
            effects.
            <br />I am constantly learning new technologies and tools to be able
            to choose the right ones for a specific task.
          </article>
          <p className={classes.additionalMessage}>
            💭 I trully fell in love with ReactJs, but I'm not afraid of tasks
            in VanillaJs or clean CSS as well.
          </p>
        </div>
        <div className={classes.infoTools}>
          <ItemsBox skills={skills} />
          <ItemsBox skills={tools} />
        </div>
      </div>
      <div>
        <p className={classes.skillsText}></p>
      </div>
    </div>
  );
};

export default SkillsAndTools;
