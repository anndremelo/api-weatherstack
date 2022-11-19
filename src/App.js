import React from 'react';
import './App.css';
import { useFetch } from './hook/useFetch';

function App() {
  const { time, temperature } = useFetch('https://api.open-meteo.com/v1/forecast?latitude=-22.79&longitude=-43.31&hourly=temperature_2m&current_weather=true&timezone=America%2FSao_Paulo&start_date=2022-11-18&end_date=2022-11-18');

  return (
    <div>
      <h1 className="App-header">
        {Object.values(time).map((response,i) => {
          return (
            <li key={response}>
              <strong>{response}</strong>
              <p>{temperature[i]+'°'}</p>
            </li>
          )
        }) 
        }
      </h1>
    </div>
  );
}

export default App;
