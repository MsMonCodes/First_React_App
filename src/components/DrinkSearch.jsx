import { useState } from 'react';
import { TextInput } from './UI/TextInput';

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState('test drink');

    return (
        <>
            <label>Search for a drink: </label>
            <TextInput />
            <p>{searchFrield}</p>
        </>
    );
};
