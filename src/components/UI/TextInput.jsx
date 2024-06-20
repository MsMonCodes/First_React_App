// where the user can write text in an input field using the HTML <input> element

import './TextInput.css';

export const TextInput = () => {
    return (
        <>
            {/* <label>Search for a drink: </label> */}
            <input type="text" className="textInput"></input>
        </>

    );
};