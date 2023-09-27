import React, { Component } from 'react';
import css from './contactForm.module.css';

export default class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.props;

    this.props.handleAddContact(name, number);

   
  };
  render() {
    const { name, number, handleInputChange } = this.props;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label  className={css.label}>
          <p className={css.descriptionInput}>Name</p>
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={css.label}>
          <p className={css.descriptionInput}>Number</p>
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            required
          ></input>
        </label>
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
  }
}
