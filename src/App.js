import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container/Container.js";

const App = () => {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts((prevState) => [...prevState, contact]);
  };

  //   if (searchSameName) {
  //     alert(`${task.name} is already in contacts`);
  //   } else if (task.name.length === 0) {
  //     alert("Fields must be filled!");
  //   } else {
  //     const contact = { ...task, id: uuidv4() };
  //     setContacts(prevState =>
  //       [...prevState.contacts, contact],
  //     );
  //   }
  // };

  const getVisiebileContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = (contactId) => {
    // this.setState((prevState) => {
    //   return {
    //     contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    //   };
    // });
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };
  const changeFilter = (filter) => {
    // setFilter({ filter: e.currentTarget.value });
    setFilter(filter);
  };
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parseContacts = JSON.parse(contacts);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     console.log("App ComponentDidUpdate");
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // const { filter } = this.state;
  // const visibleContacts = this.getVisiebileContacts();
  return (
    <Container>
      <ContactForm onAddContact={addContact} />

      {getVisiebileContacts().length > 1 && (
        <Filter value={filter} onChangeFilter={changeFilter} />
      )}
      {getVisiebileContacts().length > 0 && (
        <ContactList
          contacts={getVisiebileContacts()}
          onDeleteContact={deleteContact}
        />
      )}
    </Container>
  );
};

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
