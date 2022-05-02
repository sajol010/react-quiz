import classes from "../styles/Video.module.css";
import Image3 from "../assets/images/3.jpg";

export default function Video() {
  return (
    <a href="quiz.html">
      <div class={classes.video}>
        <img src={Image3} alt="Video" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div class={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
