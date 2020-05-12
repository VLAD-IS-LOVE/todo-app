import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (event) => {
        this.setState({
          term: event.target.value
        });
        this.props.onSearchChange(event.target.value);
      };


    render() {
        return (
            <input type="text"
                  className="form-control"
                  placeholder="type to search" 
                  value={this.state.term}
                  onChange={this.onSearchChange}
                  />
        );
    };
};
