import React from 'react';
import './ListItem.scss';

const ListItem = (props) => {
    const onRemove = () => {
        props.onRemove(props.id);
    }

    return (
        <div className="result-list-item">
            <div className="title">
                {props.title} ({props.year})
            </div>
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

export default ListItem