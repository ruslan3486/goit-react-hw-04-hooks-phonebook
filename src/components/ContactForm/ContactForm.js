import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  //   state = {
  //     number: "",
  //     name: "",
  //   };
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      alert("Вы не ввели все контактные данные");
      return;
    }

    if (Number.isNaN(+number)) {
      alert("Телефонный номер должен содержать только цифры");
      return;
    }
    // this.props.onAddContact({ ...this.state });

    // this.setState({ name: "", number: "" });
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // this.setState({
    //   [name]: value,
    // });
    switch (name) {
      case "name":
        setName(value);

        break;

      case "number":
        setNumber(value);

        break;

      default:
        return;
    }
  };

  return (
    <form className={s.text} onSubmit={handleSubmit}>
      <label className={s.text_contact}>
        <input
          className={s.text_input}
          type="text"
          name="name"
          value={name}
          placeholder="Michael Jordan"
          onChange={handleChange}
        />
      </label>
      <label className={s.text_contact}>
        <input
          className={s.text_input}
          type="text"
          name="number"
          value={number}
          placeholder="555-55-555"
          onChange={handleChange}
        />
      </label>
      <button className={s.text_button} type="submit">
        Add contacts
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default ContactForm;
