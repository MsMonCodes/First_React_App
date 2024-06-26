import viteLogo from '/vite.svg'
import './App.css'
// import './components/DrinkButtons.jsx'
// import { DrinkButtons } from './components/DrinkButtons.jsx';
// import { coffee, tea } from './utils/data.js';
import { DrinkChoice } from './components/DrinkChoice.jsx';
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch.jsx';

export const App = () => {
  const greeting = "Hello kaasling";
  const welcome = "Welcome to the KaasKlub!";
  const description = <p>This KKlub is going to change your life.</p>;
  const [userDrink, setUerDrink] = useState();
  const drinksHeader = "Drink menu";
  return (
    <div className="card">
      <h1>{greeting}</h1>
      <h2>{welcome}</h2>
      <div>{description}</div>
      <h3>{drinksHeader}</h3>
      {userDrink ? (<DrinkChoice drink={userDrink} />) : (<DrinkSearch />)}
    </div>
  );
};