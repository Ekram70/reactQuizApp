import classes from "../styles/Illustration.module.css";

function Illustration(props) {
  return (
    <div className={classes.illustration}>
      <img {...props} />
    </div>
  );
}

export default Illustration;
