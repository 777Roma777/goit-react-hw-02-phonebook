import React, { Component } from 'react';

export default class ContactForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
      
        const { name, number } = this.props; 
      
        this.props.handleAddContact(name, number); 
      };
  render() {
    const { name, number, handleInputChange } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            required
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
