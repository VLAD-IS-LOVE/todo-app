import React from 'react';
import './app-header.css';

const AppHeader = ( { total, 
                    doneCount, 
                    notDoneCount 
                } ) => {
    return ( 
        <div className="app-header text-center">
            <h1 className="app-title">Todo App</h1>

            <span className="d-flex justify-content-center">
                <h6 className="task-count">
                    Total tasks 
                    <span className="badge badge-primary task-count-item">
                        {total} 
                    </span>
                </h6>
                <h6 className="task-count">
                    done 
                    <span className="badge badge-primary task-count-item">
                        {doneCount} 
                    </span>
                </h6>
                <h6 className="task-count">
                    not done yet 
                    <span className="badge badge-primary task-count-item">
                        {notDoneCount} 
                    </span>
                </h6>
            </span>
        </div>
    );
};

export default AppHeader;