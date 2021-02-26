import react from 'react';

function Answer (props) {
    return (
        <ul className="full-answer">
            <li key={props.id} className="character-name"><h2>{props.name}</h2></li>
        </ul>
    )
}