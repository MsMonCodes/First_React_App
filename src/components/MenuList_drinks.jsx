import { MenuItem_drink } from "./MenuItem_drink";

export const MenuList_drinks = ({ drinks }) => {
    return (
        <ul>{drinks.map((drink) => (
            <button><MenuItem_drink key={drink.id} drink={drink} /></button>
        ))}</ul>
    );
}