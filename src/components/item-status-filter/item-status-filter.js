import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {filterName: 'all', label: 'All'},
        {filterName: 'active', label: 'Active'},
        {filterName: 'done', label: 'Done'}
    ];

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ filterName, label }) => {
            const isActive = filter === filterName;
            const classNames = isActive ? 'btn btn-primary' : 'btn btn-outline-primary';

            return (
                <button type="button"
                    className={classNames}
                    key={filterName}
                    onClick={() => onFilterChange(filterName)}>
                        { label }
                </button>
            );   
        });

        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    };
};