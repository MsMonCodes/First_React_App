import './DrinkButtons.css'
import { Button } from './UI/Button.jsx';

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {

    return (
        <>
            <h3>"Herb water or bean water?</h3>
            <div className="button-group">
                <Button text={drinkOne} />
                <Button text={drinkTwo} />
            </div>
        </>
    );
};
