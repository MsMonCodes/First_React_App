import { Button } from "./UI/Button";

export const DrinkChoice = ({ drink, clickFn }) => {
    return (
        <>
            <p>{drink.name}</p>
            <img src={drink.imgUrl} alt={drink.alt} width='100px' height='100pxh' />
            <p>Your drink wil be ready in a few minutes</p>
            <Button text={'Change selection'} clickFn={() => clickFn()} />
        </>
    );
};