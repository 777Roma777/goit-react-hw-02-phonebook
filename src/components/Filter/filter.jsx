import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        const { filter } = this.props;
    return (
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={this.handleInputChange}
        placeholder="Search contacts..."
      />
    );
  }
}
