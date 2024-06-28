import viteLogo from '/vite.svg'
import './App.css'
// import './components/DrinkButtons.jsx'
// import { DrinkButtons } from './components/DrinkButtons.jsx';
// import { coffee, tea } from './utils/data.js';
import { DrinkChoice } from './components/DrinkChoice.jsx';
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch.jsx';

export const App = () => {
  const heroText = "Hello kaasling";
  const greeting = "Welcome to the KaasKlub!";
  const description = <p>This KKlub is going to change your life.</p>;
  const [userDrink, setUerDrink] = useState();
  const drinksHeader = "Drink menu";
  const choiceHeader = "Your choice:";

  return (
    <div className="card">
      {userDrink ? (
        <div>
          <h3>{choiceHeader}</h3>
          <DrinkChoice drink={userDrink} clickFn={setUerDrink} />
        </div>
      ) : (
        <div>
          <h1>{heroText}</h1>
          <h2>{greeting}</h2>
          <div>{description}</div>
          <h3>{drinksHeader}</h3>
          <DrinkSearch clickFn={setUerDrink} />
        </div>
      )}
    </div>
  );
};