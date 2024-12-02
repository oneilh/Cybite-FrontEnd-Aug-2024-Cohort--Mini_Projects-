import { useState } from "react";
import STYLES from "./form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { form, input, button, field_container} = STYLES;

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    alert(`Welcome 👋 ${firstName} ${lastName} ☺`);
  };

  return (
    <>
      <Link to={"/"} className="inline-block my-6 mx-6 underline">
        back
      </Link>
      <form onSubmit={handleForm} className={form}>
        <section className={field_container}>
          <div className={input}>
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              name="firstName"
              onChange={handleFirstName}
              placeholder="John"
            />
          </div>
          <div className={input}>
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              name="lastName"
              onChange={handleLastName}
              placeholder="Doe"
            />
          </div>
        </section>

        <input type="submit" value="Submit" className={button} />
      </form>
    </>
  );
};

export default Form;
