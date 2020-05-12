import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddPanel from '../add-panel';

export default class App extends Component {
    maxId = 100;

    state = {
        TODO_DATA : [
            this.createItem('Create Todo App'),
            this.createItem('Create Film Search App'),
            this.createItem('Create Shopping Card'),
            this.createItem('Create PicEssay App')
        ],
        term: '',
        filter: 'all'
    };

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };
    
    deleteItem = (id) => {
        this.setState(({ TODO_DATA }) => {
           const indx = TODO_DATA.findIndex((e) => e.id === id);

           const before = TODO_DATA.slice(0, indx);
           const after = TODO_DATA.slice(indx + 1);
           
           const NEW_TODO_DATA = [...before, ...after];
           return {
               TODO_DATA: NEW_TODO_DATA
           }
        });
    };

    addItem = (text) => {
        console.log('This label:', text);
        // if(text) {
            this.setState(({ TODO_DATA }) => {
                const newItem = this.createItem(text);
                
                const NEW_TODO_DATA = [...TODO_DATA, newItem];
                return {
                    TODO_DATA: NEW_TODO_DATA
                    
                }
             });
        // };
    };

    toggleProperty(array, id, propName) {
        const index = array.findIndex((e) => e.id === id);

        const oldItem = array[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName] };

        return [
            ...array.slice(0, index),
            newItem,
            ...array.slice(index + 1)
        ];
    };

    onToggleDone = (id) => {
        this.setState(({ TODO_DATA }) => {
            return {
                TODO_DATA: this.toggleProperty(TODO_DATA, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ TODO_DATA }) => {
            return {
                TODO_DATA: this.toggleProperty(TODO_DATA, id, 'important')
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    search(items, term) {

        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => { 
            return item.label
            .toLowerCase()
            .indexOf(term.toLowerCase()) > -1;
        });
    };

    filter(items, filter) {
        switch(filter) {
            case 'all': return items;

            case 'active': 
            return items.filter((item) => {
                return !item.done;
            });

            case 'done': 
            return items.filter((item) => {
                return item.done;
            });
            default: return items;
        };
    };

    render() {
        const { TODO_DATA, term, filter } = this.state;
        
        const filteredItems = this.filter(TODO_DATA, filter);
        const visibleItems = this.search(filteredItems, term);

        const doneCount = TODO_DATA.filter((el) => el.done).length;
        const notDoneCount = TODO_DATA.filter((el) => el.done === false).length;

        return(
            <div className="app">
                <AppHeader 
                    total={ TODO_DATA.length }
                    doneCount={doneCount}
                    notDoneCount={notDoneCount}
                />
                <div className="serch-panel-wrapper d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList 
                    todoData={ visibleItems }
                    onDelete={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddPanel onItemAdded={this.addItem}/>
            </div>
        );
    };    
}