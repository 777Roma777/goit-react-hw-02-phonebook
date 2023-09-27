import { Component } from 'react';
import ContactForm from 'components/ContactsForm/contactForm';
import ContactsList from 'components/ContactsList/contactList';
import Filter from 'components/Filter/filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
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
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactsList contacts={filteredContacts} />
      </div>
    );
  }
}
