import classes from "../styles/Illustration.module.css";

function Illustration({ alt, ...rest }) {
  return (
    <div className={classes.illustration}>
      <img alt={alt} {...rest} />
    </div>
  );
}

export default Illustration;
