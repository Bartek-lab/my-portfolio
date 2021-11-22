import classes from "./ItemsBox.module.css";

const ItemsBox = (props) => {
  const items = props.skills.map((item) => {
    return (
      <div className={classes.skillsBox}>
        <img src={item.img} alt="skills_image" className={classes.image} />
        <ul>
          {item.items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  });

  return <div>{items}</div>;
};

export default ItemsBox;
