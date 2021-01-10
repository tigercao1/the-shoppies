import React, { useEffect, useState } from 'react';
import './ResultListItem.scss';

const ResultListItem = (props) => {
    const [isNominated, setIsNominated] = useState(false);

    useEffect(() => {
        setIsNominated(props.isNominated);
    }, [props.isNominated])

    const handleNomination = () => {
        props.handleNomination({
            title: props.title,
            year: props.year,
            id: props.id,
        });
    }

    return (
        <div className="result-list-item">
            <div className="title">
                {props.title} ({props.year})
            </div>
            <button disabled={isNominated} onClick={handleNomination}>Nominate</button>
        </div>
    )
}

export default ResultListItem