import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, 
                        onDelete, 
                        onToggleImportant, 
                        onToggleDone,
                        done, 
                        important 
                    }) => {

    let classNameDone = 'todo-list-item d-flex justify-content-between';
    let classNameImortant = 'fa fa-star-o star';
    let classNameDoneLabel = 'badge badge-primary task-count-item d-none';
    if(done) {
        classNameDone += ' done';
        classNameDoneLabel += ' d-inline-block';
    };

    if(important) {
        classNameDone += ' important';
        classNameImortant = 'fa fa-star';
    }

    return(
        <span className={classNameDone} >
            <span
                className="todo-list-item-label"
                onClick={ onToggleDone }>

                {label}

                <span className={classNameDoneLabel}>
                    done 
                </span>
            </span>
            <span className="todo-list-item-buttons d-flex">
                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDelete} >
                    <i className="fa fa-minus"></i>
                </button>
                <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={onToggleImportant}>
                    <i className={classNameImortant}></i>
                </button> 
            </span>   
        </span>
    );
};

export default TodoListItem;
