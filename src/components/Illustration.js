import classes from "../styles/Illustration.module.css";
import SigupImg from "../assets/images/signup.svg";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={SigupImg} alt="Signup" />
    </div>
  );
}
