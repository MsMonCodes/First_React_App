import { MenuItem_drink } from "./MenuItem_drink";

export const MenuList_drinks = ({ drinks, clickFn }) => {
    return (
        <>
            {drinks.map((drink) => (
                <MenuItem_drink key={drink.id} drink={drink} clickFn={clickFn} />
            ))}
        </>
    );
}