// where the user can write text in an input field using the HTML <input> element

import './TextInput.css';

export const TextInput = ({ changeFn }) => {
    return (
        <div>
            <label>Search for a drink: </label>
            <input type="text" className="textInput" onChange={changeFn}></input>
        </div>

    );
};