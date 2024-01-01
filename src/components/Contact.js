import { useRef } from "react";
import classes from "./Contact.module.css";


const Contact = (props) => {
  const n = useRef();
  const e = useRef(null);
  const p = useRef(null);
  
  
  function handleSubmit(a){
a.preventDefault();
    const obj = {
      name: n.current.value,
      email: e.current.value,
      phone: p.current.value
    };
   
  props.handleContact(obj)
  };

  return (
    <section className={classes.section}>
      <form>
        <label className={classes.label}> Name </label>
        <input type="text" name="name" ref={n} />
        <label className={classes.label}> Email id </label>
        <input type="text" name="Movie_openingText" ref={e} />
        <label className={classes.label}> Phone number </label>
        <input type="date" name="Release_date" ref={p} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};
export default Contact;
