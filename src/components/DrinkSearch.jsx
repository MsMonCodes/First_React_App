import { useState } from 'react';
import { TextInput } from './UI/TextInput';
import { MenuList_drinks } from './MenuList_drinks';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('test drink');

    return (
        <>
            {/* <label>Search for a drink: </label> */}
            <TextInput />
            <MenuList_drinks clickFn={clickFn} drinks={availableDrinks} />
        </>
    );
};
