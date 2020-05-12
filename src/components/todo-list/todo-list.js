import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ( { todoData, onDelete, onToggleImportant, onToggleDone } ) => {
    
    const items = todoData.map( (item) => {

        const { id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    { ...itemProps }
                    onDelete={ () => onDelete(id) }
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)} 
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { items }
        </ul>
    );
}

export default TodoList;