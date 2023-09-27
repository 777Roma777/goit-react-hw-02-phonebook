import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { filter, handleFilterChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search contacts..."
        />
      </label>
    );
  }
}
