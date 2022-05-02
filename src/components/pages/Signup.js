import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column"></div>
      <Illustration />
      <Form className={`${classes.Signup} form`} />
    </>
  );
}
