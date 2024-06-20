import viteLogo from '/vite.svg'
import './App.css'
import './components/DrinkButtons.jsx'
import { DrinkButtons } from './components/DrinkButtons.jsx';
import { coffee, tea } from './utils/data.js';
import { DrinkChoice } from './components/DrinkChoice.jsx';
import { useState } from 'react';

export const App = () => {
  const greeting = "Hello kaasling";
  const welcome = "Welcome to the KaasKlub!";
  const description = <p>This K.Klub is going to change your life.</p>;
  const [userDrink, setUerDrink] = useState(tea);

  return (
    <>
      <div className="card">
        <h1>{greeting}</h1>
        <h2>{welcome}</h2>
        {description}
        {userDrink ? (<DrinkChoice drink={userDrink} />) : (<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />)}
      </div>
    </>
  );
};