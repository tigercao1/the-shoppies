import React from 'react';
import './ResultListItem.scss';

const ResultListItem = (props) => {
    return (
        <div className="result-list-item">
            <div className="title">
                {props.title} ({props.year})
            </div>
            <button>Nominate</button>
        </div>
    )
}

export default ResultListItem