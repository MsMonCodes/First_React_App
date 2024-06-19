// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




// // EXERCISE 01:

// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const greeting = "Welcome to the KaasKlub!";
//   const description = <p>This KaasKlub is going to change your life.</p>;

//   return (
//     <>
//       <div className="card">
//         <h1>Hello kaasling</h1>
//         <p>{greeting}</p>
//         {description}
//         <p>If you don't like cheese, I wish you well.</p>
//       </div>
//       {/* <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App




// EXERCISE 02:   rendering coomponents

import viteLogo from '/vite.svg'
import './App.css'
import './components/DrinkButtons.jsx'
import { DrinkButtons } from './components/DrinkButtons.jsx';
// import { coffee, tea } from './utils/data';
import { coffee, tea } from './utils/data.js';

export const App = () => {
  const greeting = "Hello kaasling";
  const welcome = "Welcome to the KaasKlub!";
  const description = <p>This K.Klub is going to change your life.</p>;

  return (
    <>
      <div className="card">
        <h1>{greeting}</h1>
        <h2>{welcome}</h2>
        {description}
        <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        <p>If you don't like cheese, I wish you well.</p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}