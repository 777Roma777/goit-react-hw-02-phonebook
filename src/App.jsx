import { Component } from 'react';
import ContactForm from 'components/ContactsForm/contactForm';
import ContactsList from 'components/ContactsList/contactList';
import Filter from 'components/Filter/filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (name, number) => {
    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, contacts, number } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm
          name={name}
          number={number}
          handleInputChange={this.handleInputChange}
          handleAddContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}
