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
            <br />
            Every time I'm looking for the best solution for a specific problem.
            <br />
            If you have any tasks for me, just send me a DM.
          </article>
          <p>
            💭 I trully fell in love with ReactJs, but I'm not scared of tasks
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
