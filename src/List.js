import React, { useState, useEffect } from 'react';
import ListElement from './ListElement';

export default function List(props) {

    const remove = (id) => {
        props.removeElement(id);
    }

    function done(id) {
        props.updateElement(id);
        console.log(props);
    }

    function setDoneClass(state) {
        if (state ===  true) return 'done';
    }

    const [elements, setElements] = useState(props.elements);
    useEffect(() => {setElements(props.elements)}, [props.elements]);
    console.log(elements);
    return (
        <ul>
            {elements.map((e,i)=>
                <li className={setDoneClass(e.done)}
                onClick={() => {done(e._id)}} key={e._id}>
                    <span className="text"><ListElement e={e.name}/></span>
                    <button onClick={() => {remove(e._id)}}>x</button>
                </li>
            )}
        </ul>
    );
}