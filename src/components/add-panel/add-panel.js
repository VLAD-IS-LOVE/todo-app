import React, { Component } from 'react';

import './add-panel.css';

export default class AddPanel extends Component {

    state = {
        label: ''
      };
    
      onLabelChange = (event) => {
        this.setState({
          label: event.target.value
        });
      };
    
      onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
          label: ''
        });
      };

    render() {
        return (
            <form className="add-panel d-flex align-items-center"
                onSubmit={this.onSubmit}>
                <input
                    className="form-control" 
                    type="text" 
                    placeholder="type to add new task" 
                    onChange={this.onLabelChange}
                    value={this.state.label} 
                    />
                <button
                    className="btn btn-outline-primary btn-sm">
                        <i className="fa fa-plus" />
                </button> 
            </form>  
        );
    };
}