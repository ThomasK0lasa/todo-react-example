import React from 'react';

function AppListItem(props) {

    function setDoneClass(state) {
        if (state ===  true) return 'done';
    }

    return (
        <li onClick={() => {props.updateElement(props.id)}} className={setDoneClass(props.done)}>
            <span className="text">{props.name}</span>
            <button onClick={(e) => {props.removeElement(props.id); e.stopPropagation() }} >x</button>
        </li>
    )
}

export default AppListItem;