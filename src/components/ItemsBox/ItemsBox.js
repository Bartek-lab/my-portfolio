import classes from "./ItemsBox.module.css";

const ItemsBox = (props) => {
  const items = props.skills.map((item, i) => {
    return (
      <div className={classes.skillsBox} key={i}>
        <img src={item.img} alt="skills_image" className={classes.image} />
        <ul>
          {item.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  });

  return <div>{items}</div>;
};

export default ItemsBox;
