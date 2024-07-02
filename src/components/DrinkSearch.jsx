import { useState } from 'react';
import { TextInput } from './UI/TextInput';
import { MenuList_drinks } from './MenuList_drinks';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('');
    const handleChange = (event) => {
        return setSearchField(event.target.value);
    }
    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <>
            {/* <label>Search for a drink: </label> */}
            <TextInput
                changeFn={handleChange}
            // w={200} 
            // mb={8} 
            />
            <MenuList_drinks clickFn={clickFn} drinks={matchedDrinks} />
        </>
    );
};
